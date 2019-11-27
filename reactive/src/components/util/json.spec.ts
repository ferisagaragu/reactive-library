import { foreachJSONReactive, oderJSONByReactive, convertJSONToArrayReactive, removeInJSONArrayReactive, replaceInJSONArrayReactive, getIndexInJSONArrayReactive, isJSONReactive } from "./json.reactive";

const demoArrayData: Array<any> = [
  {
    "_id": 1,
    "name": "Mills",
    "lastName": "Gallagher",
    "age": 48
  },
  {
    "_id": 2,
    "name": "Gilliam",
    "lastName": "Wright",
    "age": 37
  },
  {
    "_id": 3,
    "name": "Donaldson",
    "lastName": "Knapp",
    "age": 2
  },
  {
    "_id": 4,
    "name": "Meyers",
    "lastName": "Phelps",
    "age": 58
  }
]

const demoData: any = {
  name: 'Test Name',
  lastName: 'Test Last Name',
  age: 23
} 

const demoDataNull: any = null;

it('test 1 - JSON(foreachJSONReactive)', () => {
  foreachJSONReactive(demoArrayData, () => {});
});

it('test 2 - JSON(foreachJSONReactive)', () => {
  foreachJSONReactive(demoDataNull, () => {});
});

it('test 3 - JSON(foreachJSONReactive)', () => {
  foreachJSONReactive('', () => {});
});



it('test 1 - JSON(oderJSONByReactive)', () => {
  expect(
    JSON.stringify(oderJSONByReactive(demoData, ['age', 'name', 'lastName']))
  ).toBe('{"age":23,"name":"Test Name","lastName":"Test Last Name"}');
});

it('test 2 - JSON(oderJSONByReactive)', () => {
  expect(
    JSON.stringify(oderJSONByReactive(demoData, ['age', 'lastName']))
  ).toBe('{"age":23,"lastName":"Test Last Name"}');
});

it('test 3 - JSON(oderJSONByReactive)', () => {
  oderJSONByReactive(demoDataNull, ['age', 'lastName']);
});

it('test 4 - JSON(oderJSONByReactive)', () => {
  oderJSONByReactive(demoData, demoDataNull);
});



it('test 1 - JSON(convertJSONToArrayReactive)', () => {
  const demoData = {
    dataUno: 'uno',
    dataDos: 'dos',
    dataTres: 'tres'
  }

  expect(
    convertJSONToArrayReactive(demoData).toString()
  ).toBe('uno,dos,tres');
});

it('test 2 - JSON(convertJSONToArrayReactive)', () => {
  convertJSONToArrayReactive(null);
});

it('test 3 - JSON(convertJSONToArrayReactive)', () => {
  const demoData = {}

  expect(
    convertJSONToArrayReactive(demoData).toString()
  ).toBe('');
});



it('test 1 - JSON(removeInJSONArrayReactive)', () => {
  const arrayData: Array<any> = [
    {
      id: 1,
      data: 'uno'
    },{
      id: 2,
      data: 'dos'
    }
  ];

  expect(
    removeInJSONArrayReactive(arrayData, 'id', 1).length
  ).toBe(1);
});

it('test 2 - JSON(removeInJSONArrayReactive)', () => {
  expect(
    removeInJSONArrayReactive(demoArrayData, '', 1).length
  ).toBe(4)
});

it('test 3 - JSON(removeInJSONArrayReactive)', () => {
  expect(
    removeInJSONArrayReactive(demoDataNull, 'id', 1).length
  ).toBe(0)
});

it('test 4 - JSON(removeInJSONArrayReactive)', () => {
  expect(
    removeInJSONArrayReactive(demoArrayData, 'id', null).length
  ).toBe(4)
});



it('test 1 - JSON(replaceInJSONArrayReactive)', () => {
  expect(
    JSON.stringify(replaceInJSONArrayReactive(demoArrayData, '_id', 1, { demoData: 'test' })[0])
  ).toBe('{"demoData":"test"}');
});

it('test 2 - JSON(replaceInJSONArrayReactive)', () => {
  expect(
    JSON.stringify(replaceInJSONArrayReactive(demoDataNull, '_id', 1, { demoData: 'test' }).length)
  ).toBe('0');
});

it('test 3 - JSON(replaceInJSONArrayReactive)', () => {
  expect(
    JSON.stringify(replaceInJSONArrayReactive(demoArrayData, '', 1, { demoData: 'test' }))
  ).toBe('[{"demoData":"test"},{"_id":2,"name":"Gilliam","lastName":"Wright","age":37},{"_id":3,"name":"Donaldson","lastName":"Knapp","age":2},{"_id":4,"name":"Meyers","lastName":"Phelps","age":58}]')
});

it('test 4 - JSON(replaceInJSONArrayReactive)', () => {
  expect(
    JSON.stringify(replaceInJSONArrayReactive(demoArrayData, '', null, { demoData: 'test' }))
  ).toBe('[{"demoData":"test"},{"_id":2,"name":"Gilliam","lastName":"Wright","age":37},{"_id":3,"name":"Donaldson","lastName":"Knapp","age":2},{"_id":4,"name":"Meyers","lastName":"Phelps","age":58}]')
});



it('test 1 - JSON(getIndexInJSONArrayReactive)', () => {
  expect(
    JSON.stringify(getIndexInJSONArrayReactive(demoArrayData, 'name', 'Donaldson'))
  ).toBe('2');
});

it('test 2 - JSON(getIndexInJSONArrayReactive)', () => {
  expect(
    getIndexInJSONArrayReactive(demoDataNull, 'name', 'Donaldson')
  ).toBe(-1);
});

it('test 3 - JSON(getIndexInJSONArrayReactive)', () => {
  expect(
    getIndexInJSONArrayReactive(demoDataNull, '', 'Donaldson')
  ).toBe(-1);
});



it('test 1 - JSON(isJSONReactive)', () => {
  isJSONReactive(demoData);
});

it('test 2 - JSON(isJSONReactive)', () => {
  isJSONReactive('');
});

it('test 3 - JSON(isJSONReactive)', () => {
  isJSONReactive(null);
});