import * as React from 'react';
import { Tabs, Tab, ListGroup, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { keyReactive } from '../key/key.reactive';
import { BugElement } from '../../exports/model/bug-element.model';
import { Link } from 'react-router-dom';
import { problemsLevel } from './data/select.data';
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
      default: return 3;
    }
  }

  private loadBug(filterBug: Array<BugElement>): React.ReactElement {
    const { onCheck } = this.props;
    
    return (
      <ListGroup variant="flush">
        {
          filterBug.map((element: BugElement) => (
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
                <Col md={ element.problemType === 'bug' ? 4 : 6 }>
                  <SpaceReactive spaces={ 4 } />
                  <Link to={ element.location }>
                    { element.location }
                  </Link>
                </Col>
                
                {
                  element.problemType === 'bug' &&
                    <Col className="text-center" md={ 4 }>
                      { problemsLevel[this.levelProblem(element.levelProblem)].label }
                    </Col>
                }
                
                <Col className="text-right" md={ element.problemType === 'bug' ? 4 : 6 }>
                  { element.createDate }
                </Col>
              </Row>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    );
  }

  render() {
    const { tabSelect } = this.state;
    const { bugData } = this.props;
    const bugElement: Array<BugElement> = bugData ? bugData.filter((element: BugElement) => element.problemType === 'bug' && !element.resolved) : [];
    const improvementElement: Array<BugElement> = bugData ? bugData.filter((element: BugElement) => element.problemType === 'improvement' && !element.resolved) : [];
    const petitionElement: Array<BugElement> = bugData ? bugData.filter((element: BugElement) => element.problemType === 'petition' && !element.resolved) : [];

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
                bugElement.length !== 0 &&
                  <Badge pill variant="danger">
                    { bugElement.length }
                  </Badge>
              }
            </div> 
          }
        > 
          { 
            bugElement.length !== 0 ?
              this.loadBug(bugElement) 
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
                improvementElement.length !== 0 &&
                  <Badge pill variant="danger">
                    { improvementElement.length }
                  </Badge>
              }
            </div> 
          }
        >
          { 
            improvementElement.length !== 0 ?
              this.loadBug(improvementElement)
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
                petitionElement.length !== 0 &&
                  <Badge pill variant="danger">
                    { petitionElement.length }
                  </Badge>
              }
            </div> 
          }
        >
          { 
            petitionElement.length !== 0 ?
              this.loadBug(petitionElement)
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