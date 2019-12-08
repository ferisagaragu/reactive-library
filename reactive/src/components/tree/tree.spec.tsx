import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as awesomeIcons from '@fortawesome/free-solid-svg-icons';
import { TreeReactive } from './tree.reactive';
import { TreeElement } from '../../exports/model/tree-element.model';
import { keyReactive } from '../key/key.reactive';
Enzyme.configure({ adapter: new Adapter() });


const icons: any = [
  awesomeIcons.faBug,
  awesomeIcons.faClipboardList,
  awesomeIcons.faMagic,
  awesomeIcons.faArrowDown,
  awesomeIcons.faMinus,
  awesomeIcons.faArrowUp,
  awesomeIcons.faBoxes
];
library.add(icons);

const data = [
  new TreeElement({
    uid: keyReactive(),
    name: <label>Elemento 1</label>,
    items: [  
      new TreeElement({
        uid: keyReactive(),
        name: <label>Hijo del Elemento 1</label>,
        expanded: true,
        disabled: false
      })
    ],
    expanded: true,
    disabled: false
  }),
  new TreeElement({
    uid: keyReactive(),
    name: <label>Elemento 2</label>,
    items: [  
      new TreeElement({
        uid: keyReactive(),
        name: <label>Hijo del Elemento 2</label>,
        disabled: true,
        expanded: true,
        items: [
          new TreeElement({
            uid: keyReactive(),
            name: <label>Hijo del hijo Elemento 2</label>,
            disabled: false
          })
        ]
      }),
      new TreeElement({
        uid: keyReactive(),
        name: <label>Hijo del Elemento 2</label>,
        disabled: false
      })
    ],
    disabled: false
  }),
  new TreeElement({
    uid: keyReactive(),
    name: <label>Elemento 2</label>,
    items: null
  })
]

it('test 1 - Tree: functionality test', () => {
  const wrapper = Enzyme.mount(
    <TreeReactive 
      rootLabel="root"
      treeData={ data }
      onClick={ () => {} }
      rootExpanded={ false }
      disabled={ false }
    />
  );
  wrapper.unmount();
});

it('test 2 - Tree: functionality test by click in tree element', () => {
  const wrapper = Enzyme.mount(
    <TreeReactive 
      rootLabel="root"
      treeData={ data }
      onClick={ () => {} }
      rootExpanded={ false }
      disabled={ false }
    />
  );
  const elementProps: any = wrapper.find('TreeItemReactive').at(1).props();
  elementProps.onClick();
  wrapper.unmount();
});

it('test 3 - Tree: functionality test by click in single tree element', () => {
  const wrapper = Enzyme.mount(
    <TreeReactive 
      rootLabel="root"
      treeData={ data }
      onClick={ () => {} }
      rootExpanded={ false }
      disabled={ false }
    />
  );
  wrapper.find('label').at(1).simulate('click');
  wrapper.find('div').at(22).simulate('click');
  wrapper.unmount();
});