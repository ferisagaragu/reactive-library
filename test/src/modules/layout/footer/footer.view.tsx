import React, { Component } from 'react';
import { Footer, Row, Col, BugReport, connect, UserData } from 'reactive';
import { ReactComponent as GitHubIcon } from '../../../styles/svg/github-logo.svg';
import { ReactComponent as FirebaseIcon } from '../../../styles/svg/firebase-logo.svg';
import { ReactComponent as NeuroBrainIcon } from '../../../styles/svg/neuron.svg';

interface Props {
  windowSize: string;
  userData: UserData;
}

interface State {}

class FooterView extends Component<Props, State> {
  render() {
    const { windowSize, userData } = this.props;

    return (
      <Footer 
        className="r-gradient"
        left={
          <Row>
            <Col className="p-3 text-center" xs={ 6 } sm={ 6 } md={ 6 }>
              <NeuroBrainIcon 
                className={ `${ 
                    windowSize === 'xs' || windowSize === 'sm' ?
                      'r-icon-32'
                    :
                      'r-icon-42'
                  }` 
                } 
              />

              {
                !(windowSize === 'xs' || windowSize === 'sm') && 
                  <h4 className="m-3">
                    NeuroBrain
                  </h4>
              }
            </Col>
          </Row>
        }
        center={
          <Row>
            <Col className="p-3"  xs={ 6 } sm={ 6 } md={ 6 }>
              <a className="r-no-link" href="https://console.firebase.google.com/">
                <FirebaseIcon 
                  className={ `${ 
                      windowSize === 'xs' || windowSize === 'sm' ?
                        'r-icon-32'
                      :
                        'r-icon-42'
                    }` 
                  }  
                />
                {
                  !(windowSize === 'xs' || windowSize === 'sm') && 
                    <h4 className="m-3">
                      Firebase
                    </h4>
                }
              </a>
            </Col>

            <Col className="p-3" xs={ 6 } sm={ 6 } md={ 6 }>
              <a className="r-no-link" href="https://github.com/ferisagaragu/reactive-library">
                <GitHubIcon 
                  className={ `${ 
                      windowSize === 'xs' || windowSize === 'sm' ?
                        'r-icon-32'
                      :
                        'r-icon-42'
                    }` 
                  }   
                />
                {
                  !(windowSize === 'xs' || windowSize === 'sm') && 
                    <h4 className="m-3">
                      GitHub Repo
                    </h4>
                }
              </a>
            </Col>
          </Row>
        }
        right={
          <Row>
            <Col 
              className={ `text-right ${!(windowSize === 'xs' || windowSize === 'sm') && 'mt-3'} p-3` } 
              xs={ 12 }
              sm={ 12 } 
              md={ 12 }
            >
              <BugReport
                className={ `${!(windowSize === 'xs' || windowSize === 'sm') && 'mt-4 ml-4'}` }
                classBug={ windowSize === 'xs' || windowSize === 'sm' ? 'bug-report-mini mr-1' : '' }
                classReport={ windowSize === 'xs' || windowSize === 'sm' ? 'bug-report-mini' : '' }
                buttonSize={ windowSize === 'xs' || windowSize === 'sm' ? 'sm' : undefined }
                adminRole={ userData.role === 1 }
                titleAlter="Resolver el problema"
                textAlter="¿Estas seguro de que quieres marcar el problema como resuelto?"
              />
            </Col>
          </Row>
        }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  userData: state.userData,
  windowSize: state.windowSize
});

export default connect(mapStateToProps, null)(FooterView);