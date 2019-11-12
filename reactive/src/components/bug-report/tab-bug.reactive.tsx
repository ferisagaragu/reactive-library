import * as React from 'react';
import { Tabs, Tab, ListGroup, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { keyReactive } from '../key/key.reactive';
import { BugElement } from '../../exports/model/bug-element.model';
import { Link } from 'react-router-dom';
import { problemsLevel } from './data/select-data.reactive';
import { CheckBoxReactive } from '../react-field/checkbox.reactive';

interface Props {
  bugData: Array<BugElement>;
  onCheck: Function;
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
  
  private levelProblem(levelProblem: string): number {
    switch (levelProblem) {
      case 'mild': return 0;
      case 'medium': return 1;
      case 'serious': return 2;
    }

    return -1;
  }

  private loadBug(filterBug: string): React.ReactElement {
    const { bugData, onCheck } = this.props;
    
    if (bugData) {
      return (
        <ListGroup variant="flush">
          {
            bugData.filter((element: BugElement) => element.problemType === filterBug && !element.resolved)
            .map((element: BugElement) => (
              <ListGroup.Item key={ keyReactive() }>
                <Row>
                  <Col md={ 11 }>
                    <code>
                      { element.uid }
                    </code> 
                    <SpaceReactive />
                    -
                    <SpaceReactive />
                    { element.description }
                    <SpaceReactive />
                  </Col>

                  <Col md={ 1 }>
                    <CheckBoxReactive
                      onChange={ (value: boolean, checkbox: any) => onCheck(value, element, checkbox) }
                      checked={ element.resolved } 
                    />
                  </Col>
                </Row>

                <Row>
                  <Col md={ filterBug === 'bug' ? 4 : 6 }>
                    <SpaceReactive spaces={ 4 } />
                    <Link to={ element.location }>
                      { element.location }
                    </Link>
                  </Col>
                  
                  {
                    filterBug === 'bug' &&
                      <Col className="text-center" md={ 4 }>
                        { problemsLevel[this.levelProblem(element.levelProblem)].label }
                      </Col>
                  }
                  
                  <Col className="text-right" md={ filterBug === 'bug' ? 4 : 6 }>
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
    const bugNumber = bugData.filter((element: BugElement) => element.problemType === 'bug' && !element.resolved).length;
    const improvementNumber = bugData.filter((element: BugElement) => element.problemType === 'improvement' && !element.resolved).length;
    const petition = bugData.filter((element: BugElement) => element.problemType === 'petition' && !element.resolved).length;

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
              { 
                bugNumber !== 0 &&
                  <Badge pill variant="danger">
                    { bugNumber }
                  </Badge>
              }
            </div> 
          }
        > 
          { 
            bugNumber !== 0 ?
              this.loadBug('bug') 
            :
              <div className="text-center mt-5">
                No hay errores reportados
              </div>
          }
        </Tab>

        <Tab 
          eventKey="improvement" 
          title={ 
            <div className="text-info">
              <FontAwesomeIcon icon="clipboard-list" /> 
              <SpaceReactive />
              Mejoras
              <SpaceReactive />
              { 
                improvementNumber !== 0 &&
                  <Badge pill variant="danger">
                    { improvementNumber }
                  </Badge>
              }
            </div> 
          }
        >
          { 
            improvementNumber !== 0 ?
              this.loadBug('improvement')
            :
              <div className="text-center mt-5">
                No hay mejoras reportadas
              </div>
          }
        </Tab>

        <Tab 
          eventKey="petition" 
          title={ 
            <div className="text-success">
              <FontAwesomeIcon icon="magic" /> 
              <SpaceReactive />
              Petición
              <SpaceReactive />
              { 
                petition !== 0 &&
                  <Badge pill variant="danger">
                    { petition }
                  </Badge>
              }
            </div> 
          }
        >
          { 
            petition !== 0 ?
              this.loadBug('petition')
            :
              <div className="text-center mt-5">
                No hay peticiones reportadas
              </div>
          }
        </Tab>
      </Tabs>
    );
  }
}