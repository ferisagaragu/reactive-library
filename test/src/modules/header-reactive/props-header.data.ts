import PropsModel from "../../core/models/props.model";

export const propsHeader: Array<PropsModel> = [
  new PropsModel({
    propName: 'menuData',
    type: 'Array<BurgerElement>',
    required: false,
    description: 'Contenido del burger menu'
  }),
  new PropsModel({
    propName: 'left',
    type: 'ReactElement',
    required: false,
    description: 'Este contendra codigo Html que se alineara a la izquierda'
  }),
  new PropsModel({
    propName: 'center',
    type: 'ReactElement',
    required: false,
    description: 'Este contendra codigo Html que se alineara al centro'
  }),
  new PropsModel({
    propName: 'right',
    type: 'ReactElement',
    required: false,
    description: 'Este contendra codigo Html que se alineara a la derecha'
  }),
  new PropsModel({
    propName: 'child',
    type: 'ReactElement',
    required: false,
    description: 'Este debe entrar dentro de la etiqueta Footer'
  })
];

export const propsHeaderModel: Array<PropsModel> = [
  new PropsModel({
    propName: 'uid',
    type: 'any',
    required: true,
    description: 'Id unico e irrepetible'
  }),
  new PropsModel({
    propName: 'name',
    type: 'any',
    required: true,
    description: 'Es el nombre que representara al nodo padre en el menu'
  }),
  new PropsModel({
    propName: 'icon',
    type: 'any',
    required: true,
    description: 'Este este es un icono que se pondra del lado izquierdo del nodo padre del menu'
  }),
  new PropsModel({
    propName: 'items',
    type: 'Array<BurgerSubElement>',
    required: true,
    description: 'Este es un arreglo de los nodos hijos que se mostraran en el menu'
  }),
  new PropsModel({
    propName: 'link',
    type: 'string',
    required: false,
    description: 'Este es el link que se invocara al darle clic al arbol'
  })
];

export const propsHeaderModelSub: Array<PropsModel> = [
  new PropsModel({
    propName: 'uid',
    type: 'any',
    required: true,
    description: 'Id unico e irrepetible'
  }),
  new PropsModel({
    propName: 'name',
    type: 'any',
    required: true,
    description: 'Es el nombre que representara al nodo hijo en el menu'
  }),
  new PropsModel({
    propName: 'icon',
    type: 'any',
    required: true,
    description: 'Este este es un icono que se pondra del lado izquierdo del nodo hijo del menu'
  }),
  new PropsModel({
    propName: 'link',
    type: 'string',
    required: true,
    description: 'Este es el link que se invocara al darle clic al arbol'
  })
];

export const exampleCode = (
`<Header
   left={
     <div>
       left
     </div>
   }
   center={
     <div>
       center
     </div>
   }
   right={
     <div>
       right
     </div>
   }
   menuData={[
     new BurgerElement({
       uid: key(),
       icon: <FontAwesomeIcon icon="atom" />,
       name: <label>Reactive Components</label>,
       items: [
         new BurgerSubElement({
           uid: key(),
           icon: <ComponentIncon className="menu-icon"/>,
           name: <label>Header</label>,
           link: '/header'
        })
       ]
     })   
   ]}
 />

<Header>
  Soy un header
</Header>`
);