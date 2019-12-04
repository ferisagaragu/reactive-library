import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BurgerElement } from '../../exports/model/burger-element.model';
import { NavMenuReactive } from './nav-menu.reactive';
import { onWindowResize } from '../reducers/window-resize.actions';
import { connect } from '../../exports/redux.export';

const reactBurguer = require('react-burger-menu');
const Menu = reactBurguer.slide;

interface Props {
  className?: string; 
  left?: React.ReactElement;
  right?: React.ReactElement;
  center?: React.ReactElement;
  menuData?: Array<BurgerElement>;
  minSize?: string;
  maxSize?: string;
  windowSize?: string;
  onWindowResize: Function;
}

interface State {
  isOpenMenu: boolean;
}

class HeaderReactive extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpenMenu: false
    }
  }

  componentDidMount() {
    this.props.onWindowResize();
  }

  private setBurgerMenuSize(): void {
    const { windowSize, minSize, maxSize } = this.props;
    const menuBurger: any = document.getElementsByClassName('bm-menu-wrap')[0];

    if (!menuBurger) {
      return;
    }

    if (windowSize === 'xs' || windowSize === 'sm') {
      menuBurger.style.width =  minSize ? minSize : '300px';
    } else {
      menuBurger.style.width = maxSize ? maxSize : '400px';
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

    return <></>;
  }

  render() {
    const { left, right, center, children, className, menuData } = this.props;
    const { isOpenMenu } = this.state;
    menuData && this.setBurgerMenuSize();

    return (
      <header className={ `header-reactive ${className ? className : ''}` }>
        {
          left || right || center || menuData ?
            <Row>
              {
                menuData &&
                  <Col className="burger-reactive" xs={ 1 } sm={ 1 } md={ 1 }>
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
                  <Col className="text-left" xs={ center ? menuData ? 3 : 4 : menuData ? 5 : 6 }  sm={ center ? menuData ? 3 : 4 : menuData ? 5 : 6 } md={ center ? menuData ? 3 : 4 : menuData ? 5 : 6 }>
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
                  <Col className="text-right" xs={ center ? 4 : 5 } sm={ center ? 4 : 5 } md={ center ? 4 : 6 }>
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

const mapStateToProps = (state: any) => ({
  windowSize: state.windowSize
});

const mapDispatchToProps = (dispatch: Function) => ({
  onWindowResize: () => dispatch(onWindowResize())
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderReactive);