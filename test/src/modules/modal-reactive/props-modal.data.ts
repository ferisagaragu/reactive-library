import PropsModel from "../../core/models/props.model";

export const propsModal: Array<PropsModel> = [
  new PropsModel({
    propName: 'title',
    type: 'string',
    required: true,
    description: 'Este es el titulo del modal'
  }),
  new PropsModel({
    propName: 'modalShow',
    type: 'boolean',
    required: true,
    description: 'Indica si el modal se muestra o no'
  }),
  new PropsModel({
    propName: 'onHide',
    type: 'callback',
    required: true,
    description: 'Esta accion se dispara cuando se cierra el modal'
  }),
  new PropsModel({
    propName: 'size',
    type: "'sm' | 'lg' | 'xl'",
    required: true,
    description: 'Estos son los tamaños que puede tomar el modal'
  }),
  new PropsModel({
    propName: 'children',
    type: 'any',
    required: false,
    description: 'Este es el contenido interno del modal'
  }),
  new PropsModel({
    propName: 'centered',
    type: 'boolean',
    required: false,
    description: 'Este indica si el modal sale en el centro'
  }),
  new PropsModel({
    propName: 'closeButton',
    type: 'boolean',
    required: false,
    description: 'Este indica si aparece el boton para cerrar el modal'
  })
];

export const exampleCode = (
`<Modal 
   title="Titulo del Modal"
   modalShow={ isClose }
   onHide={ () => this.setState({ isClose: false }) }
   size="lg"
   children={
     <div>
       Soy el contenido del Modal
     </div>
   }
   centered={ true }
   closeButton={ true }
/>`
);