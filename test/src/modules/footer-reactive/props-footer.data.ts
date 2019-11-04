import PropsModel from "../../core/models/props.model";

export const propsFooter: Array<PropsModel> = [
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

export const exampleCode = (
`<Footer
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
 />

<Footer>
  Soy un footer
</Footer>`
);