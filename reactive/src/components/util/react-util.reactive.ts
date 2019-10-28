import * as React from 'react';

export function findByTypeReactive(children: any, component: any): React.ReactElement {
  const result: Array<any> = [];
  const type = [component.displayName] || [component.name];
  
  React.Children.forEach(children, child => {
    const childType =
      child && child.type && (child.type.displayName || child.type.name);
    if (type.includes(childType)) {
      result.push(child);
    }
  });
  
  return result[0];
};