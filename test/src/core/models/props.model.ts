class PropsModel {

  propName: string;
  type: string;
  required: boolean;
  description: string;
  
  constructor(data: any | PropsModel) {
    this.propName = '';
    this.type = '';
    this.required = false;
    this.description = '';

    Object.assign(this, data);
  }
}

export default PropsModel;