import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Props {
	className?: string;
  left?: React.ReactElement;
  right?: React.ReactElement;
  center?: React.ReactElement;
}

interface State {}

export class FooterReactive extends React.Component<Props, State> {
  render() {
    const { left, right, center, children, className } = this.props;

    return (
      <footer className={ `footer-reactive ${className ? className : ''}` }>
        {
          left || right || center ?
            <Row className="footer-reactive-row">
              {
                left && 
                  <Col className="text-left" xs={ center ? 4 : 6 } sm={ center ? 4 : 6 } md={ center ? 4 : 6 }>
                    { left }
                  </Col>
              }

              {
                center && 
                  <Col className="text-center" xs={ 4 } sm={ 4 } md={ 4 }>
                    { center }
                  </Col>
              }

              {
                right && 
                  <Col className="text-right" xs={ center ? 4 : 6 } sm={ center ? 4 : 6 } md={ center ? 4 : 6 }>
                    { right }
                  </Col>
              }
            </Row>
          :
            children
        }
      </footer>
    );
  }
}