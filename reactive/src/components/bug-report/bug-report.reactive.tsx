import * as React from 'react';
import { ModalReactive } from '../modal/modal.reactive';
import { Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { FormBugReactive } from './form-bug.reactive';
import { problems, problemsLevel } from './data/select-data.reactive';
import { TabBug } from './tab-bug.reactive';
import { BugElement } from '../../exports/model/bug-element.model';

interface Props {
  bugData: Array<BugElement>;
  adminRole: boolean;
  onCreateBug: Function;
}

interface State {
  isShow: boolean;
  isShowAdmin: boolean;
}

export class BugReportReactive extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      isShow: false,
      isShowAdmin: false
    }
  }
  
  private onCreateBug(formData: any): void {
    const { onCreateBug } = this.props;
    onCreateBug(formData);
    this.setState({ isShow: false });
  }

  render() {
    const { isShow, isShowAdmin } = this.state;
    const { children, adminRole, bugData } = this.props;

  	return (
      <>
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
            bugData={ bugData }
          />
        </ModalReactive>

        <Button
          className="btn-outline-bug"
          onClick={ () => this.setState({ isShow: true }) }
          variant="outline-dark"
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
              className="ml-3"
              onClick={ () => this.setState({ isShowAdmin: true }) }
              variant="outline-info"
            >
              <FontAwesomeIcon icon="file-medical-alt" />
              <SpaceReactive />
              Ver reporte
              <SpaceReactive />
              <Badge pill variant="danger">
                { bugData.length }
              </Badge>
            </Button>
        }
      </>
    );
  }
}