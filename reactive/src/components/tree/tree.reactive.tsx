import * as React from 'react';
import { keyReactive } from '../key/key.reactive';
import TreeItemReactive from './tree-item.reactive';
import { TreeElement } from '../../exports/model/tree-element.model';

interface Props {
  rootLabel: any;
  treeData: Array<TreeElement>;
  onClick?: Function;
  rootExpanded?: boolean;
  disabled?: boolean;
}

interface State {}

export class TreeReactive extends React.Component<Props, State> {
    
  private renderTree(data: any) {
    const { onClick } = this.props;

  	const children = (items: Array<TreeElement>, name: any, uid: any, expanded: boolean, disabled: boolean): any => {
    	if (items.length !== 0) {
      	return (
          <TreeItemReactive
            label={ name }
            child={
              <div>
                { this.renderTree(items) }
              </div>
            }
            onClick={ () => onClick && onClick(uid) }
            expanded={ expanded }
            disabled={ disabled }
          />
        );
      }
    }
    
    return data.map((node: TreeElement) => {
      return (
        <div key={ keyReactive() }>
          { 
            children(
              node.items ? 
                node.items 
              : 
                [], 
              node.name, 
              node.uid, 
              node.expanded ? 
                node.expanded 
              : 
                false,
              node.disabled ?
                node.disabled
              : 
                false
            ) 
          }
          
          { 
            node.items &&
              node.items.length === 0 && 
                <div 
                  onClick={ () => onClick && onClick(node.uid) }
                >
                  { node.name }
                </div> 
          }
        </div>
      );
    })
  }
  
  render() {
    const { rootLabel, treeData, rootExpanded, disabled } = this.props;

  	return (
      <TreeItemReactive
        label={ rootLabel }
        child={
          <div>
            { this.renderTree(treeData) }
          </div>
        }
        expanded={ rootExpanded }
        disabled={ disabled }
      />
    );
  }
}