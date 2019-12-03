import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as awesomeIcons from '@fortawesome/free-solid-svg-icons';
import { TabBug } from './tab-bug.reactive';
import { BrowserRouter as Router } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });

const bugDemoData: any = [
  {
    "createDate" : "10/11/2019 00:16:45",
    "description" : "Nuevo elemento",
    "levelProblem" : "mild",
    "location" : "/home",
    "problemType" : "bug",
    "resolved" : false,
    "uid" : "k2sluq8s"
  },{
    "createDate" : "10/11/2019 00:33:00",
    "description" : "No hay documentación adecuada",
    "levelProblem" : "medium",
    "location" : "/modal",
    "problemType" : "bug",
    "resolved" : false,
    "uid" : "k2smfmru"
  },{
    "createDate" : "10/11/2019 00:33:00",
    "description" : "No hay documentación adecuada",
    "levelProblem" : "serious",
    "location" : "/modal",
    "problemType" : "bug",
    "resolved" : false,
    "uid" : "k2smfmru"
  },{
    "createDate" : "10/11/2019 00:33:00",
    "description" : "No hay documentación adecuada",
    "levelProblem" : "serious_*",
    "location" : "/modal",
    "problemType" : "bug",
    "resolved" : false,
    "uid" : "k2smfmru"
  },{
    "createDate" : "11/11/2019 11:31:47",
    "description" : "Ponle mas gradients",
    "location" : "/footer",
    "problemType" : "petition",
    "resolved" : false,
    "uid" : "k2upeors"
  },{
    "createDate" : "11/11/2019 21:09:57",
    "description" : "Crear Div que ya contengan las animaciones css de animate.css",
    "location" : "/firebase",
    "problemType" : "petition",
    "resolved" : false,
    "uid" : "k2va27g1"
  },{
    "createDate" : "11/11/2019 21:09:57",
    "description" : "Crear Div que ya contengan las animaciones css de animate.css",
    "location" : "/firebase",
    "problemType" : "improvement",
    "resolved" : false,
    "uid" : "k2va27g1"
  }
]

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

it('test 1 - TabBug: functionality test', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <TabBug 
        bugData={ bugDemoData }
        onCheck={ () => {} }
      />
    </Router>
  );
  wrapper.unmount();
});

it('test 2 - TabBug: functionality test by emply array', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <TabBug 
        bugData={ [] }
        onCheck={ () => {} }
      />
    </Router>
  );
  
  const tagA = wrapper.find('#controlled-tab-example-tab-improvement').at(1);
  tagA.simulate('click');
  expect(wrapper.find('.show').find('div').at(1).props().children).toBe('No hay mejoras reportadas');
  wrapper.unmount();
});

it('test 3 - TabBug: functionality test by check bug', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <TabBug 
        bugData={ bugDemoData }
        onCheck={ () => {} }
      />
    </Router>
  );
  
  const check = wrapper.find('input[type="checkbox"]').at(0);
  check.simulate('change', { target: {checked: true} });
  wrapper.unmount();
});

it('test 4 - TabBug: functionality test by null in bugData attribute', () => {
  const dataNull: any = null;

  const wrapper = Enzyme.mount(
    <Router>
      <TabBug 
        bugData={ dataNull }
        onCheck={ () => {} }
      />
    </Router>
  );

  wrapper.unmount();
});