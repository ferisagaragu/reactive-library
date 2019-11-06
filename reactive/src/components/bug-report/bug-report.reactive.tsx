import * as React from 'react';
import { ModalReactive } from '../modal/modal.reactive';
import { Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { FormBugReactive } from './form-bug.reactive';

interface Props {
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
    const { children } = this.props;

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
            cancel={ () => console.log('Cancelo') }
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

        <Button
          className="ml-3"
          onClick={ () => this.setState({ isShow: true }) }
          variant="outline-info"
        >
          <FontAwesomeIcon icon="file-medical-alt" />
          <SpaceReactive />
          Ver reporte
          <SpaceReactive />
          <Badge pill variant="danger">12</Badge>
        </Button>
      </>
    );
  }
}