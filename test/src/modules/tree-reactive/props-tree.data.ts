import PropsModel from "../../core/models/props.model";

export const propsTree: Array<PropsModel> = [
  new PropsModel({
    propName: 'rootLabel',
    type: 'any',
    required: true,
    description: 'Es Nombre del nodo principal'
  }),
  new PropsModel({
    propName: 'treeData',
    type: 'Array<TreeElement>',
    required: true,
    description: 'Es un arreglo de tipo TreeElement'
  }),
  new PropsModel({
    propName: 'onClick',
    type: 'callback',
    required: false,
    description: 'Este evento se disparara cada que den clic en un nodo'
  }),
  new PropsModel({
    propName: 'rootExpanded',
    type: 'boolean',
    required: false,
    description: 'Indica si el nodo principal va a estar expandido'
  }),
  new PropsModel({
    propName: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Indica si el nodo principal esta disponible'
  })
];

export const propsTreeElement: Array<PropsModel> = [
  new PropsModel({
    propName: 'uid',
    type: 'any',
    required: true,
    description: 'Este es el id unico y no debe ser unico e irrepetible'
  }),
  new PropsModel({
    propName: 'name',
    type: 'any',
    required: true,
    description: 'Este es el nombre que se mostrara en el nodo'
  }),
  new PropsModel({
    propName: 'items',
    type: 'Array<TreeElement>',
    required: false,
    description: 'Es un arreglo de tipo TreeElement'
  }),
  new PropsModel({
    propName: 'expanded',
    type: 'boolean',
    required: false,
    description: 'Indica si el nodo principal va a estar expandido'
  }),
  new PropsModel({
    propName: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Indica si el nodo principal esta disponible'
  })
];

export const exampleCode = (
`<Tree
  rootLabel="Root"
  treeData={[
    new TreeElement({
      uid: key(),
      name: <label>Elemento 1</label>,
      items: [  
        new TreeElement({
          uid: key(),
          name: <label>Hijo del Elemento 1</label>,
          expanded: true,
          disabled: false
        })
      ],
      expanded: true,
      disabled: false
    }),
    new TreeElement({
      uid: key(),
      name: <label>Elemento 2</label>,
      items: [  
        new TreeElement({
          uid: key(),
          name: <label>Hijo del Elemento 2</label>,
          disabled: false,
          items: [
            new TreeElement({
              uid: key(),
              name: <label>Hijo del hijo Elemento 2</label>,
              disabled: false
            })
          ]
        }),
        new TreeElement({
          uid: key(),
          name: <label>Hijo del Elemento 2</label>,
          disabled: false
        })
      ],
      disabled: false
    })
  ]}
  onClick={ (uid: string) => { TU ACCION } }
  rootExpanded={ true }
  disabled={ false }
/>`
);