import * as React from 'react';
import { Tabs, Tab, ListGroup, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { keyReactive } from '../key/key.reactive';
import { BugElement } from '../../exports/model/bug-element.model';
import { Link } from 'react-router-dom';

interface Props {
  bugData: Array<BugElement>;
}

interface State {
  tabSelect: string;
}

export class TabBug extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      tabSelect: 'bug'
    }
  }
  
  private loadBug(): React.ReactElement {
    const { bugData } = this.props;
    console.log(bugData);
    if (bugData) {
      return (
        <ListGroup variant="flush">
          {
            bugData.filter((element: BugElement) => element.problemType === 'bug')
            .map((element: BugElement) => (
              <ListGroup.Item key={ keyReactive() }>
                <Row>
                  <Col md={ 11 }>
                    { element.uid } 
                    <SpaceReactive />
                    -
                    <SpaceReactive />
                    { element.description }
                    <SpaceReactive />
                    <Link to={ element.location }>
                      { element.location }
                    </Link>
                  </Col>

                  <Col md={ 1 }>
                    <input type="checkbox" checked={ element.resolved } />
                  </Col>

                  <Col className="text-right" md={ 12 }>
                    { element.createDate }
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      );
    }

    return <></>;
  }

  render() {
    const { tabSelect } = this.state;
    const { bugData } = this.props;

    return (
      <Tabs 
        id="controlled-tab-example" 
        activeKey={ tabSelect } 
        onSelect={ (key: any) => this.setState({ tabSelect: key }) }
      >
        <Tab 
          eventKey="bug" 
          title={ 
            <div className="text-danger">
              <FontAwesomeIcon icon="bug" /> 
              <SpaceReactive />
              Errores
              <SpaceReactive />
              <Badge pill variant="danger">
                { bugData.filter((element: BugElement) => element.problemType === 'bug').length }
              </Badge>
            </div> 
          }
        > 
          { this.loadBug() }
        </Tab>

        <Tab 
          eventKey="improvement" 
          title={ 
            <div className="text-info">
              <FontAwesomeIcon icon="clipboard-list" /> 
              <SpaceReactive />
              Mejoras
              <SpaceReactive />
              <Badge pill variant="danger">
                { bugData.filter((element: BugElement) => element.problemType === 'improvement').length }
              </Badge>
            </div> 
          }
        >
          Hola amigo
        </Tab>

        <Tab 
          eventKey="petition" 
          title={ 
            <div className="text-success">
              <FontAwesomeIcon icon="magic" /> 
              <SpaceReactive />
              Petición
              <SpaceReactive />
              <Badge pill variant="danger">
                { bugData.filter((element: BugElement) => element.problemType === 'petition').length }
              </Badge>
            </div> 
          }
        >
          Yes
        </Tab>
      </Tabs>
    );
  }
}