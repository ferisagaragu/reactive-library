import * as React from 'react';
import { keyReactive } from '../key/key.reactive';
import { BurgerElement } from '../../exports/model/burger-element.model';
import NavMenuItemReactive from './nav-menu-item.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { BurgerSubElement } from '../../exports/model/burger-sub-element.model';
import { removeArrayByMatchReactive } from '../util/array.reactive';

interface Props {
  treeData: Array<BurgerElement>;
  onClick: Function;
}

interface State {
  selectedItem: string;
  expandedItem: Array<string>;
}

export class NavMenuReactive extends React.Component<Props, State> {
  
  expandedItems: Array<string>;
  onLoadExpanded: string;

  constructor(props: Props) {
    super(props);

    this.state = {
      selectedItem: '',
      expandedItem: [] 
    }

    this.expandedItems = [];
  }

  componentDidMount() {
    this.expandedItems.push(this.onLoadExpanded);
    this.setState({ expandedItem: this.expandedItems });
  }

  private onExpanded(node: BurgerElement): void {
    const { expandedItem } = this.state;

    if (expandedItem.includes(node.uid)) {
      removeArrayByMatchReactive(this.expandedItems, node.uid);
    } else {
      this.expandedItems.push(node.uid);
    }

    setTimeout(
      () => {
        this.setState({ expandedItem: this.expandedItems })
      },
      3 * 100
    );
  }

  private selectNode(selectedItem: string, element: BurgerSubElement, uidFather: string) {
    if (selectedItem === '' && element.link === window.location.pathname) {
      this.onLoadExpanded = uidFather;
      return <b>{ element.name }</b>;
    } else {
      return (
        element.uid === selectedItem ? 
          <b>{ element.name }</b> 
        : 
          element.name
      );
    }
  }

  private renderChildren(node: BurgerElement, uidFather: string): React.ReactElement {
    const { selectedItem } = this.state;
    const { onClick } = this.props;

    return (
      <div>
        { 
          node.items.length !== 0 && 
            node.items.map((element: BurgerSubElement) => (
              <Link 
                key={ keyReactive() }
                className="bm-sub-element" 
                to={ element.link } 
                style={ {width: '100%'} }
              >
                <div 
                  onClick={ () => { this.setState({ selectedItem: element.uid }); onClick(); } }
                >
                  { element.icon ? element.icon : <FontAwesomeIcon icon="boxes" /> }
                  &nbsp;&nbsp;
                  { this.selectNode(selectedItem, element, uidFather) }
                </div>
              </Link>
            ))
        }
      </div>
    );
  }

  private renderTree(data: any) {
    const { selectedItem, expandedItem } = this.state;
    const { onClick } = this.props;

    return data.map((node: BurgerElement) => (
      <div key={ keyReactive() }>
        { 
          node.items.length !== 0 ?
            <NavMenuItemReactive
              icon={ node.icon }
              label={ node.name }
              child={ this.renderChildren(node, node.uid) }
              onClick={ () => this.onExpanded(node) }
              expanded={ expandedItem.includes(node.uid) }
              link={ node.link }
            />
          :
            <Link 
              key={ keyReactive() }
              className="bm-single-element" 
              to={ node.link ? node.link : '#' }
              style={ {width: '100%'} }
            >
              <div 
                onClick={ () => { this.setState({ selectedItem: node.uid }); onClick(); } }
              >
                { node.icon ? node.icon : <FontAwesomeIcon icon="boxes" /> }
                &nbsp;&nbsp;
                { 
                  node.link === window.location.pathname ? 
                    <b>{ node.name }</b> 
                  : 
                    node.uid === selectedItem ? 
                      <b>{ node.name }</b> 
                    : 
                      node.name 
                }
              </div> 
            </Link>
        }
      </div>
    ));
  }
  
  render() {
    const { treeData } = this.props;

  	return (
      <div>
        { this.renderTree(treeData) }
      </div>
    );
  }
}