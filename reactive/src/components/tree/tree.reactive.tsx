import * as React from 'react';
import TreeFatherReactive from './tree-father.reactive';

interface Props {
  treeData: any;
}

interface State {}

class TreeReactive extends React.Component<Props, State> {
  
  private renderTree(treeData?: any): any {
    let k: any = '';
    let out: React.ReactElement = <></>;
    
    for (k in treeData){
      if (treeData.hasOwnProperty(k)){
        if (treeData[k] instanceof Object) {
          console.log(k);
          this.renderTree(treeData[k]);
        } else {
          console.log(treeData[k]);
          return (
          <TreeFatherReactive 
          label={ k }
          children={  }
          />);
        }
      }           
    }
  
    return null;
  }
  
  render() {
    const { treeData } = this.props;
    this.renderTree(treeData);
    return (
      <>
        hola    
      </>
    );
  }
}

export default TreeReactive;