import React, { Component } from 'react';
import { ReactComponent as ReactiveLogo } from '../styles/svg/reactive.svg';
import {
  Firebase, 
  convertJSONToArray,
  connect, 
  Header, 
  Footer,
  key,
  BurgerElement,
  Container,
  Row,
  Col
} from 'reactive';
import TableView from './table-reactive/table.view';
//import Routing from '../core/routes/routing.routes';

class App extends Component<any, any> {
  
  firebase = new Firebase();

  constructor(props: any) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.firebase.on('tableReactive',(data: any) => {
      this.setState({ dataTable: convertJSONToArray(data.val()), isLoading: false });
    });  
  }
  
  render() {
    return (
      <>
        <Header
          left={
            <Row>
              <Col className="mt-1" md={ 1 }>
                <ReactiveLogo 
                  className="reactive-log" 
                /> 
              </Col>

              <Col md={ 10 }>
                <h3 className="ml-3">
                  Reactive
                </h3>
              </Col>
            </Row>
          }
          menuData={[
            new BurgerElement({
              uid: key(),
              label: <label>Hola</label>,
              items: []
            }),
            new BurgerElement({
              uid: key(),
              label: <label>Hola</label>,
              icon: <button>*</button>,
              items: []
            })
          ]}
        />

        {/*<Route 
        render={ ({ location, history }: any) => {
          history.push('/test');
          return <></>;
         } }
        />*/}


        {/*<Routing></Routing>*/}
        <Container className="app-container">
          <TableView />
        </Container>

        {/*<Container className="app-container">
          <Tree 
            rootLabel={ <input type="text"/> }
            rootExpanded
            onClick={ (uid: string) => console.log(uid) }
            treeData={[
              new TreeElement({
                uid: key(),
                name: <h4>Pedro moreno</h4>,
                items: [
                  new TreeElement({
                    uid: key(),
                    name: <h5>Soy el bebe de pedro</h5>,
                    items: [
                      new TreeElement({
                        uid: key(),
                        name: <h6>Y yo el bebe del bebe de pedro</h6>
                      })
                    ]
                  })
                ]
              }),
              new TreeElement({
                uid: key(),
                name: <h4>Soy el hermano de Pedro</h4>,
                items: [
                  new TreeElement({
                    uid: key(),
                    name: <h5>Soy el hijo del hermano de Pedro</h5>
                  })
                ]
              })
            ]}
          />
          </Container>*/}

          

        <Footer 
          left={
            <h3 className="m-3">
              NeuroBrain
            </h3>
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.userData
  }
};

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);