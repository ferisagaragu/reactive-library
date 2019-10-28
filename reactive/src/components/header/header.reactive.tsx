import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Props {
  left?: React.ReactElement;
  right?: React.ReactElement;
  center?: React.ReactElement;
}

interface State {}

class HeaderReactive extends React.Component<Props, State> {

  headerRef: any = null;

  constructor(props: Props) {
    super(props);
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    window.onscroll = () => {
      this.strictPosition();
    };
  }

  private strictPosition(): void {
    let header = this.headerRef.current;
    let sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky-reactive");
    } else {
      header.classList.remove("sticky-reactive");
    }
  }

  render() {
    const { left, right, center, children } = this.props;

    return (
      <header ref={ this.headerRef } className="header-reactive">
        {
          left || right || center ?
            <Row>
              {
                left && 
                  <Col className="text-left" md={ center ? 4 : 6 }>
                    { left }
                  </Col>
              }

              {
                center && 
                  <Col className="text-center" md={ 4 }>
                    { center }
                  </Col>
              }

              {
                right && 
                  <Col className="text-right" md={ center ? 4 : 6 }>
                    { right }
                  </Col>
              }
            </Row>
          :
            children
        }
      </header>
    );
  }
}

export default HeaderReactive;