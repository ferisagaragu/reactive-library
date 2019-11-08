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
    value: 'low', 
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
    value: 'hider', 
    label: 
      <label className="text-danger mt-2" >
        <FontAwesomeIcon icon="arrow-up" /> 
        <SpaceReactive />
        Grave
      </label> 
  })
];