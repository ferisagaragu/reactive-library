import * as React from 'react';
import { ModalReactive } from '../modal/modal.reactive';
import { Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { FormBugReactive } from './form-bug.reactive';
import { problems, problemsLevel } from './data/select-data.reactive';
import { TabBug } from './tab-bug.reactive';
import { BugElement } from '../../exports/model/bug-element.model';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { convertJSONToArrayReactive } from '../util/json.reactive';
import { alertQuestionReactive } from '../swal/swal.reactive';

interface Props {
  className?: string;
  classBug?: string | undefined;
  classReport?: string | undefined;
  buttonSize?: 'sm' | 'lg' | undefined;
  adminRole: boolean;
  titleAlter: string;
  textAlter: string;
}

interface State {
  isShow: boolean;
  isShowAdmin: boolean;
  bugData: Array<BugElement>;
}

export class BugReportReactive extends React.Component<Props, State> {
  
  firebase: FirebaseReactive = new FirebaseReactive();

  constructor(props: Props) {
    super(props);

    this.state = {
      isShow: false,
      isShowAdmin: false,
      bugData: []
    }
  }
  
  componentDidMount() {
    this.firebase.on('bugReport', (bugValue: any) => {
      this.setState({ bugData: convertJSONToArrayReactive(bugValue.val()) })
    }); 
  }

  private onCreateBug(formData: any): void {
    this.firebase.update(`bugReport/${formData.uid}`, formData);
    this.setState({ isShow: false });
  }

  private onCheck(value: boolean, element: any, checkRef: any): void {
    const { titleAlter, textAlter } = this.props;

    alertQuestionReactive(
      'question', 
      titleAlter, 
      textAlter,
      () => {
        element.resolved = value;
        this.firebase.update(`bugReport/${element.uid}`, element);
      },
      () => {
        checkRef.checked = false;
      }
    );
  }

  render() {
    const { isShow, isShowAdmin, bugData } = this.state;
    const { children, adminRole, className, classBug, classReport, buttonSize } = this.props;

  	return (
      <div className={ className }>
        <ModalReactive
          title="Reportar un problema"
          modalShow={ isShow }
          onHide={ () => this.setState({ isShow: false }) }
          size="lg"
          centered={ true }
          closeButton={ true }
        >
          <FormBugReactive 
            submitActions={ (formData: any) => this.onCreateBug(formData) }
            cancel={ () => this.setState({ isShow: false }) }
            initialValues={{
              problemType: problems[0],
              levelProblem: problemsLevel[0]
            }}
          />
        </ModalReactive>

        <ModalReactive
          title="Problemas encontrados en el sistema"
          modalShow={ isShowAdmin }
          onHide={ () => this.setState({ isShowAdmin: false }) }
          size="lg"
          centered={ true }
          closeButton={ true }
        >
          <TabBug 
            onCheck={ (value: boolean, element: any, checkRef: any) => this.onCheck(value, element, checkRef) }
            bugData={ bugData }
          />
        </ModalReactive>

        <Button
          className={ `btn-outline-bug ${classBug}` }
          onClick={ () => this.setState({ isShow: true }) }
          variant="outline-dark"
          size={ buttonSize }
        >
          <FontAwesomeIcon icon="bug" />
          { 
            children &&
              <>
                <SpaceReactive />
                { children }
              </>
          }
        </Button>
        
        {
          adminRole &&
            <Button
              className={ `${classReport ? classReport : 'ml-3'}` }
              onClick={ () => this.setState({ isShowAdmin: true }) }
              variant="outline-info"
              size={ buttonSize }
            >
              <FontAwesomeIcon icon="file-medical-alt" />
              <SpaceReactive />
              { 
                children &&
                  <>
                    Ver reporte
                  </>
              }
              { 
                bugData.filter((element: any) => !element.resolved).length !== 0 &&
                  <>
                    <SpaceReactive />
                    <Badge pill variant="danger">
                      { bugData.filter((element: any) => !element.resolved).length }
                    </Badge>
                  </>
              } 
            </Button>
        }
      </div>
    );
  }
}