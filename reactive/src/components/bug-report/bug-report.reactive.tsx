import * as React from 'react';
import { ModalReactive } from '../modal/modal.reactive';
import { Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { FormBugReactive } from './form-bug.reactive';

interface Props {
  adminRole: boolean;
  onCreateBug: Function;
}

interface State {
  isShow: boolean;
}

export class BugReportReactive extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      isShow: false
    }
  }
  
  render() {
    const { isShow } = this.state;
    const { children, adminRole } = this.props;

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
            submitActions={ (formData: any) => console.log(formData) }
            cancel={ () => this.setState({ isShow: false }) }
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
              onClick={ () => {} }
              variant="outline-info"
            >
              <FontAwesomeIcon icon="file-medical-alt" />
              <SpaceReactive />
              Ver reporte
              <SpaceReactive />
              <Badge pill variant="danger">12</Badge>
            </Button>
        }
      </>
    );
  }
}