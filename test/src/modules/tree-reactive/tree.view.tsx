import React, { Component } from 'react';
import { Row, key, Col, SyntaxHighlighter, tomorrow, Tree, TreeElement } from 'reactive';
import PropsTableComponent from '../../shared/props-table/props-table.component';
import { propsTree, propsTreeElement, exampleCode } from './props-tree.data';

interface Props {}

interface State {}

class TreeView extends Component<Props,State> {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Tree
          </h2>
        </Col>

        <Col md={ 12 }>
          <h4>
            Atributos
          </h4>
        </Col>
        
        <Col className="mb-5" md={ 12 }>
          <PropsTableComponent
            propsData={ propsTree }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Modelos
          </h4>
        </Col>

        <Col className="mb-5" md={ 12 }>
          <code>TreeElement</code>
          <PropsTableComponent
            propsData={ propsTreeElement }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Codígo
          </h4>
        </Col>

        <Col className="mb-5" md={ 8 }>
          <SyntaxHighlighter 
            language="tsx"
            style={ tomorrow } 
          > 
            { exampleCode }
          </SyntaxHighlighter>
        </Col>

        <Col md={ 12 }>
          <h4>
            Demo
          </h4>
        </Col>

        <Tree
          rootLabel="Root"
          treeData={[
            new TreeElement({
              uid: key(),
              name: <label>Elemento 1</label>,
              items: [  
                new TreeElement({
                  uid: key(),
                  name: <label>Hijo del Elemento 1</label>,
                  expanded: true,
                  disabled: false
                })
              ],
              expanded: true,
              disabled: false
            }),
            new TreeElement({
              uid: key(),
              name: <label>Elemento 2</label>,
              items: [  
                new TreeElement({
                  uid: key(),
                  name: <label>Hijo del Elemento 2</label>,
                  disabled: false,
                  items: [
                    new TreeElement({
                      uid: key(),
                      name: <label>Hijo del hijo Elemento 2</label>,
                      disabled: false
                    })
                  ]
                }),
                new TreeElement({
                  uid: key(),
                  name: <label>Hijo del Elemento 2</label>,
                  disabled: false
                })
              ],
              disabled: false
            })
          ]}
          onClick={ (uid: string) => console.log(uid) }
          rootExpanded={ true }
          disabled={ false }
        />
      </Row>
    );
  }
}

export default TreeView;