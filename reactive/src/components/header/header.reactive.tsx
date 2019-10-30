import * as React from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';
import { BurgerElement } from '../..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const reactBurguer = require('react-burger-menu');
const Menu = reactBurguer.slide;

interface Props {
  className?: string; 
  left?: React.ReactElement;
  right?: React.ReactElement;
  center?: React.ReactElement;
  menuData?: Array<BurgerElement>;
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

  private renderMenu() {
    const { menuData } = this.props;
    
    if (menuData) {
      return menuData.map((element: BurgerElement) => (
        <Accordion>
          <Card className="bureger-item-layout-reactive">
            <Accordion.Toggle 
              className="bureger-item-reactive" 
              as={Card.Header} 
              eventKey="0"
            > 
              { element.icon ? element.icon : <FontAwesomeIcon icon="boxes" /> }
              &nbsp;&nbsp;
              { element.label }
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body className="bureger-item-content-reactive">
                { element.uid }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ));
    }

    return <></>
  }

  render() {
    const { left, right, center, children, className, menuData } = this.props;
    this.renderMenu();
    return (
      <header ref={ this.headerRef } className={ `header-reactive ${className ? className : ''}` }>
        {
          left || right || center || menuData ?
            <Row>
              {
                menuData &&
                  <Col  className="burger-reactive" md={ 1 }>
                    <Menu>
                      { this.renderMenu() }
                    </Menu>   
                  </Col>
              }

              {
                left && 
                  <Col className="text-left" md={ center ? menuData ? 3 : 4 : menuData ? 5 : 6 }>
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