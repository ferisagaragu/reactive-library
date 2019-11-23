import PropsModel from "../../core/models/props.model";

export const props: Array<PropsModel> = [
  new PropsModel({
    propName: 'spaces',
    type: 'number',
    required: false,
    description: 'Este es el numero de espacios que pueden existir'
  })
];

export const exampleCode = (
` <Space spaces={ 2 }/>`
);