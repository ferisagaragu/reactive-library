class FunctionModel {

  functionName: string;
  params: string;
  returnStr: string;
  description: string;
  
  constructor(data: any | FunctionModel) {
    this.functionName = '';
    this.params = '';
    this.returnStr = '';
    this.description = '';

    Object.assign(this, data);
  }
}

export default FunctionModel;