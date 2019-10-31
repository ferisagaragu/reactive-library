import PropsModel from "../../core/models/props.model";

export const propsTable: Array<PropsModel> = [
  new PropsModel({
    propName: 'className',
    type: 'string',
    required: false,
    description: 'Clase css'
  }),
  new PropsModel({
    propName: 'variant',
    type: `'dark'`,
    required: false,
    description: 'Cambia el tema de la tabla a obscuro'
  }),
  new PropsModel({
    propName: 'animate',
    type: `boolean`,
    required: false,
    description: 'Indica si la tabla tendra o no animaciones'
  }),
  new PropsModel({
    propName: 'header',
    type: `Array<HeaderTable>`,
    required: true,
    description: 'Son los datos que se mostraran en la cabecera de la tabla, asi como de metadata de la misma'
  }),
  new PropsModel({
    propName: 'tableData',
    type: `Array<any>`,
    required: true,
    description: 'Son los datos de la tabla, estos tienen que contener relacion con la cabecera'
  }),
  new PropsModel({
    propName: 'isLoad',
    type: `boolean`,
    required: false,
    description: 'Indica si la tabla esta cargando la informacion, mostrando un indicador'
  }),
  new PropsModel({
    propName: 'noTableData',
    type: `string`,
    required: false,
    description: 'Mensaje que se mostrara si la tabla no tiene información'
  }),
  new PropsModel({
    propName: 'search',
    type: `boolean`,
    required: false,
    description: 'Indica si se mostrara el campo para buscar dentro de la infromacion de la tabla'
  }),
  new PropsModel({
    propName: 'searchPlaceholder',
    type: `string`,
    required: false,
    description: 'Este indica el placeholder del campo de busqueda'
  }),
  new PropsModel({
    propName: 'noSearchResult',
    type: `string`,
    required: false,
    description: 'Mensaje que se mostrara si no se encontraron resultados al buscar en la tabla'
  }),
  new PropsModel({
    propName: 'actionsLabel',
    type: `string`,
    required: false,
    description: 'Nombre de la columna de las acciones de la tabla'
  }),
  new PropsModel({
    propName: 'create',
    type: `boolean`,
    required: false,
    description: 'Indica si el boton para crear nuevos elementos aparecera'
  }),
  new PropsModel({
    propName: 'edit',
    type: `boolean`,
    required: false,
    description: 'Indica si el boton para editar elementos aparecera'
  }),
  new PropsModel({
    propName: 'drop',
    type: `boolean`,
    required: false,
    description: 'Indica si el boton para eliminar elementos aparecera'
  }),
  new PropsModel({
    propName: 'onCreate',
    type: `callback`,
    required: false,
    description: 'Evento que devolvera el elemento que se acaba de crear'
  }),
  new PropsModel({
    propName: 'onEdit',
    type: `callback`,
    required: false,
    description: 'Evento que devolvera el elemento que se acaba de editar'
  }),
  new PropsModel({
    propName: 'onDrop',
    type: `callback`,
    required: false,
    description: 'Evento que devolvera el elemento que se acaba de eliminar'
  }),
  new PropsModel({
    propName: 'dropAlertTitle',
    type: `string`,
    required: false,
    description: 'Titulo del dialogo de advertencia antes de eliminar un elemento'
  }),
  new PropsModel({
    propName: 'dropAlertText',
    type: `string`,
    required: false,
    description: 'Texto del dialogo de advertencia antes de eliminar un elemento'
  }),
  new PropsModel({
    propName: 'pager',
    type: `boolean`,
    required: false,
    description: 'Indica si se va a mostrar el paginador para la tabla'
  }),
  new PropsModel({
    propName: 'showElements',
    type: `number`,
    required: false,
    description: 'Numero de elementos que se van a mostrar, por default seran 5'
  }),
  new PropsModel({
    propName: 'pageShow',
    type: `number`,
    required: false,
    description: 'Numero de nodos que se mostraran en el paginador, por default seran 5'
  }),
  new PropsModel({
    propName: 'pageMessage',
    type: `'Mostrando desde $(init) hasta $(end) de $(length) registros'`,
    required: false,
    description: 'Mensaje que se mostrara para saber cuantos registros de cuantos se estan mostrando'
  })
];