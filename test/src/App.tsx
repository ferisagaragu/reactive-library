import React from 'react';
import { Table, HeaderTable, key, Firebase } from 'reactive';

class ExampleData {
  uid: string;
  name: string;
  lastName: string;

  constructor(data: any | ExampleData) {
    this.uid = key();
    this.name = '';
    this.lastName = '';
    Object.assign(this, data);
  }
}

const tableDataExample = [
  {
    "uid": "5da79fa637787aeb9d861fad",
    "name": "Mayo Oconnor",
    "lastName": "Moon Mckenzie",
    "company": "Pharmacon",
    "email": "shepardmcdonald@ovolo.com",
    "phonNumber": "(866) 521-3573"
  },
  {
    "uid": "5da79fa6a473407b815fad76",
    "name": "Coleman Carey",
    "lastName": "Robinson Foley",
    "company": "Assurity",
    "email": "fayeholt@translink.com",
    "phonNumber": "(800) 503-3501"
  },
  {
    "uid": "5da79fa69f7d80b922422492",
    "name": "Kate Clarice",
    "lastName": "Mcclure Hinton",
    "company": "Imkan",
    "email": "concepcionprince@zentry.com",
    "phonNumber": "(959) 486-2885"
  },
  {
    "uid": "5da79fa6ee6ad7ba92438a9d",
    "name": "Franks Jordan",
    "lastName": "Franks Castillo",
    "company": "Isologia",
    "email": "beckpatrick@fangold.com",
    "phonNumber": "(814) 570-3617"
  },
  {
    "uid": "5da79fa689d2915d93f5ed2d",
    "name": "Pansy Paulette",
    "lastName": "Eaton Jenkins",
    "company": "Olucore",
    "email": "ingridreid@quarex.com",
    "phonNumber": "(990) 541-2507"
  },
  {
    "uid": "5da79fa6d5aa3596c5210162",
    "name": "Adela Camacho",
    "lastName": "Francis Montoya",
    "company": "Songbird",
    "email": "changmendoza@euron.com",
    "phonNumber": "(959) 477-2639"
  },
  {
    "uid": "5da79fa6c59bd2d3faaa3da1",
    "name": "Marilyn Scott",
    "lastName": "Dillard Griffin",
    "company": "Zialactic",
    "email": "blevinshoward@shepard.com",
    "phonNumber": "(892) 508-3575"
  },
  {
    "uid": "5da79fa6bddeaa8f3382c5d9",
    "name": "Freda Angelita",
    "lastName": "Bernard Morin",
    "company": "Cemention",
    "email": "jacquelineduran@ovium.com",
    "phonNumber": "(854) 409-3263"
  },
  {
    "uid": "5da79fa6e3f3e3f8328aaea9",
    "name": "Guy Adams",
    "lastName": "Delgado Massey",
    "company": "Equitax",
    "email": "schultzterrell@typhonica.com",
    "phonNumber": "(848) 415-2854"
  },
  {
    "uid": "5da79fa6c3292f20d3e8e46e",
    "name": "Waller Freida",
    "lastName": "Romero Owen",
    "company": "Affluex",
    "email": "cantusnyder@shadease.com",
    "phonNumber": "(987) 446-2889"
  },
  {
    "uid": "5da79fa65681a009797c5c89",
    "name": "Latonya Tammy",
    "lastName": "Glover Leblanc",
    "company": "Zoid",
    "email": "shannoncervantes@vertide.com",
    "phonNumber": "(968) 531-3585"
  },
  {
    "uid": "5da79fa6106898d99dcb8b26",
    "name": "Graham Kramer",
    "lastName": "Mayo Jacobson",
    "company": "Interfind",
    "email": "kaufmandixon@jamnation.com",
    "phonNumber": "(960) 546-3586"
  },
  {
    "uid": "5da79fa6d23859d088ac1b4a",
    "name": "Staci Roberts",
    "lastName": "Ratliff Conley",
    "company": "Qualitex",
    "email": "sophiafrench@zuvy.com",
    "phonNumber": "(957) 484-2252"
  },
  {
    "uid": "5da79fa69497aefdacf749b2",
    "name": "Arnold Leticia",
    "lastName": "Collier Roach",
    "company": "Plasmox",
    "email": "reginaflynn@sunclipse.com",
    "phonNumber": "(944) 517-3307"
  },
  {
    "uid": "5da79fa6ffb1ce52f0c8f36c",
    "name": "Liliana Liza",
    "lastName": "Maxwell Morton",
    "company": "Maineland",
    "email": "claytonsheppard@zerbina.com",
    "phonNumber": "(877) 552-2049"
  },
  {
    "uid": "5da79fa6c4bda78c622e19c6",
    "name": "Briggs Leanna",
    "lastName": "Skinner Norman",
    "company": "Ohmnet",
    "email": "natashafloyd@golistic.com",
    "phonNumber": "(977) 405-3523"
  },
  {
    "uid": "5da79fa6dc5fe4414b09516b",
    "name": "Hoover Humphrey",
    "lastName": "Shepherd Jackson",
    "company": "Pheast",
    "email": "freemanpark@aquacine.com",
    "phonNumber": "(937) 562-3959"
  },
  {
    "uid": "5da79fa6176ef110eae0216c",
    "name": "Carissa Anita",
    "lastName": "Richard Cooke",
    "company": "Rugstars",
    "email": "delaneynguyen@zaphire.com",
    "phonNumber": "(869) 430-3441"
  },
  {
    "uid": "5da79fa62fd6f1a6127e876c",
    "name": "Cynthia Luisa",
    "lastName": "Christensen Rasmussen",
    "company": "Octocore",
    "email": "guthriebray@portico.com",
    "phonNumber": "(920) 585-3023"
  },
  {
    "uid": "5da79fa651290c136963d6e2",
    "name": "Crane Luella",
    "lastName": "Adkins Solomon",
    "company": "Flyboyz",
    "email": "greenebates@macronaut.com",
    "phonNumber": "(953) 436-3547"
  },
  {
    "uid": "5da79fa69ede5ee4939b118b",
    "name": "Jeanette Langley",
    "lastName": "Stephens Clemons",
    "company": "Zilladyne",
    "email": "lowerywood@melbacor.com",
    "phonNumber": "(984) 502-2753"
  },
  {
    "uid": "5da79fa6b468525e7df2f542",
    "name": "Ruthie Harrell",
    "lastName": "Parsons Neal",
    "company": "Lotron",
    "email": "andreaschroeder@ozean.com",
    "phonNumber": "(890) 542-3330"
  },
  {
    "uid": "5da79fa6ff5c945e1361db8c",
    "name": "Moran Petty",
    "lastName": "Whitney Douglas",
    "company": "Sonique",
    "email": "kaylaclark@comcur.com",
    "phonNumber": "(898) 590-3933"
  },
  {
    "uid": "5da79fa6b077f8ad1c78db86",
    "name": "Kimberly Bertha",
    "lastName": "Gardner Hopkins",
    "company": "Pyrami",
    "email": "ryansanchez@netplax.com",
    "phonNumber": "(801) 598-2787"
  },
  {
    "uid": "5da79fa6c5097d86a03ea0ee",
    "name": "Ayala Selena",
    "lastName": "Wilkinson Reilly",
    "company": "Frosnex",
    "email": "burkemcdowell@elpro.com",
    "phonNumber": "(976) 479-2886"
  }
]

const App: React.FC = () => {
  const firebase = new Firebase();

  firebase.once('budgets',(data: any) => {
    console.log(data.val());
  });  
  
  return (
    <>
      <Table 
        header={ 
          [
            new HeaderTable({
              key: 'name',
              label: 'Nombre',
              type: 'text',
              required: true,
              placeholder: 'Escribe aquí un nombre' 
            }),
            new HeaderTable({
              key: 'lastName',
              label: 'Apellido',
              type: 'text',
              required: true,
              placeholder: 'Escribe aquí tu apellido' 
            }),
            new HeaderTable({
              key: 'company',
              label: 'Compañia',
              type: 'text',
              required: true,
              placeholder: 'Escribe aquí tu apellido' 
            }),
            new HeaderTable({
              key: 'email',
              label: 'Correo electronico',
              type: 'text',
              required: true,
              placeholder: 'Escribe aquí tu apellido' 
            }),
            new HeaderTable({
              key: 'phonNumber',
              label: 'Número telefonico',
              type: 'text',
              required: true,
              placeholder: 'Escribe aquí tu apellido' 
            })
          ]
        }
        tableData={ tableDataExample }
        edit
      />
    </>
  );
}

export default App;
