import * as React from 'react';
import { SelectElement } from "../../../exports/model/select-element.model";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../../space/space.reactive';

export const problems: Array<SelectElement> = [
  new SelectElement({ 
    value: 'bug', 
    label: 
      <label className="text-danger mt-2" >
        <FontAwesomeIcon icon="bug" /> 
        <SpaceReactive />
        Error 
      </label> 
  }),
  new SelectElement({ 
    value: 'improvement', 
    label: 
      <label className="text-info mt-2" >
        <FontAwesomeIcon icon="clipboard-list" /> 
        <SpaceReactive />
        Mejora
      </label> 
  }),
  new SelectElement({ 
    value: 'petition', 
    label: 
      <label className="text-success mt-2" >
        <FontAwesomeIcon icon="magic" /> 
        <SpaceReactive />
        Petición
      </label> 
  })
];

export const problemsLevel: Array<SelectElement> = [
  new SelectElement({ 
    value: 'mild', 
    label: 
      <label className="text-success mt-2" >
        <FontAwesomeIcon icon="arrow-down" /> 
        <SpaceReactive />
        Leve 
      </label> 
  }),
  new SelectElement({ 
    value: 'medium', 
    label: 
      <label className="text-info mt-2" >
        <FontAwesomeIcon icon="minus" /> 
        <SpaceReactive />
        Medio
      </label> 
  }),
  new SelectElement({ 
    value: 'serious', 
    label: 
      <label className="text-danger mt-2" >
        <FontAwesomeIcon icon="arrow-up" /> 
        <SpaceReactive />
        Grave
      </label> 
  })
];

export const suggest = [
  <ul>
    <li>El problema solo se presenta solo en ocaciones</li>
    <li>Error de ortografia</li>
  </ul>,
  <ul>
    <li>El problema se precenta despues de una secuencia de acciones</li>
    <li>La interface no me permite continuar con el proceso normal en ciertas pantallas</li>
    <li>Tengo errores en ciertos registros que cree hace tiempo o son nuevos</li>
  </ul>,
  <ul>
    <li>El problema no me deja continuar en el proceso normal del sistema</li>
    <li>Me aparece una pantalla de error mientras trabajo con normalidad</li>
    <li>Cosas que con anterioridad funcionaban han dejado de funcionar</li>
  </ul>
];