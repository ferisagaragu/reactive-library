import * as React from 'react';

interface Props {
  treeData: any;
}

interface State {}

class TreeReactive extends React.Component<Props, State> {
  
  private renderTree(treeData?: any): any {
    let k: any = '';
    
    if (treeData instanceof Object) {
      for (k in treeData){
        if (treeData.hasOwnProperty(k)){



          /*return (
            <TreeFatherReactive 
              label={ k }
              child={ this.renderTree(treeData[k]) }
            />
          );*/
          console.log(k);
          //this.renderTree(treeData[k]);
        }           
      }
    }

    console.log(treeData[k]);
    return treeData[k];
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