import PropsModel from "../../core/models/props.model";

export const props: Array<PropsModel> = [
  new PropsModel({
    propName: 'className',
    type: 'string',
    required: false,
    description: 'Esta es la clase css'
  }),
  new PropsModel({
    propName: 'adminRole',
    type: 'boolean',
    required: true,
    description: 'Este define si se puede ver el modal del estado de la aplicación'
  }),
  new PropsModel({
    propName: 'titleAlter',
    type: 'string',
    required: true,
    description: 'Este es el titulo de la alerta al cerrar un bug'
  }),
  new PropsModel({
    propName: 'textAlter',
    type: 'string',
    required: true,
    description: 'Este es el mensaje de confirmación para la alerta al cerrar un bug'
  })
];

export const exampleCode = (
`<BugReport
   className="mt-4 ml-4"
   adminRole={ true }
   titleAlter="Resolver el problema"
   textAlter="¿Estas seguro de que quieres marcar el problema como resuelto?"
 />`
);