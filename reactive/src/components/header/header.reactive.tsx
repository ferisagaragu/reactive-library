import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BurgerElement } from '../../exports/model/burger-element.model';
import { NavMenuReactive } from './nav-menu.reactive';

const reactBurguer = require('react-burger-menu');
const Menu = reactBurguer.slide;

interface Props {
  className?: string; 
  left?: React.ReactElement;
  right?: React.ReactElement;
  center?: React.ReactElement;
  menuData?: Array<BurgerElement>;
}

interface State {
  isOpenMenu: boolean;
}

export class HeaderReactive extends React.Component<Props, State> {

  headerRef: any = null;

  constructor(props: Props) {
    super(props);
    this.headerRef = React.createRef();

    this.state = {
      isOpenMenu: false
    }
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
      return (
        <NavMenuReactive 
          onClick={ () => this.setState({ isOpenMenu: false }) }
          treeData={ menuData }
        />
      );
      
    }

    return <></>
  }

  render() {
    const { left, right, center, children, className, menuData } = this.props;
    const { isOpenMenu } = this.state;

    return (
      <header ref={ this.headerRef } className={ `header-reactive ${className ? className : ''}` }>
        {
          left || right || center || menuData ?
            <Row>
              {
                menuData &&
                  <Col  className="burger-reactive" md={ 1 }>
                    <Menu
                      isOpen={ isOpenMenu }
                      onStateChange={ (isOpenStatus: any) => this.setState({ isOpenMenu: isOpenStatus.isOpen }) }
                    >
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