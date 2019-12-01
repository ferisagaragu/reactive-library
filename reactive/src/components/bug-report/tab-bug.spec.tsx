import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as awesomeIcons from '@fortawesome/free-solid-svg-icons';
import { TabBug } from './tab-bug.reactive';
import { BrowserRouter as Router } from 'react-router-dom';

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
  const div = document.createElement('div');

  ReactDOM.render(
    <Router>
      <TabBug 
        bugData={ bugDemoData }
        onCheck={ () => {} }
      />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('test 2 - TabBug: functionality test by emply array', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(
    <Router>
      <TabBug 
        bugData={ [] }
        onCheck={ () => {} }
      />
    </Router>,
    div
  );

  div.getElementsByTagName('a')[1].click();
  expect(div.getElementsByClassName('show')[0].innerHTML).toBe('<div class="text-center mt-5">No hay mejoras reportadas</div>');
  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
});

it('test 3 - TabBug: functionality test by check bug', () => {
  const div: any = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(
    <Router>
      <TabBug 
        bugData={ bugDemoData }
        onCheck={ () => {} }
      />
    </Router>,
    div
  );

  div.querySelectorAll('input[type=checkbox]')[0].click();
  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
});

it('test 4 - TabBug: functionality test by null in bugData attribute', () => {
  const div: any = document.createElement('div');
  document.body.appendChild(div);
  const dataNull: any = null;

  ReactDOM.render(
    <Router>
      <TabBug 
        bugData={ dataNull }
        onCheck={ () => {} }
      />
    </Router>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
});