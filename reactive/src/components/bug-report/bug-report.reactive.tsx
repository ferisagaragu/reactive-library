import * as React from 'react';
import { ModalReactive } from '../modal/modal.reactive';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';

interface Props {}

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

  componentDidMount() {
    /*
    Username: sii1GOTyMd

Database name: sii1GOTyMd

Password: Fn6SfdPTOH

Server: remotemysql.com

Port: 3306
    */
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
          Hola amigos
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
      </>
    );
  }
}