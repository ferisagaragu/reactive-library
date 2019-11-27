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

it('test 1 - JSON(foreachJSONReactive): functionality test', () => {
  foreachJSONReactive(demoArrayData, () => {});
});

it('test 2 - JSON(foreachJSONReactive): functionality test by sending null parameters', () => {
  foreachJSONReactive(demoDataNull, () => {});
});

it('test 3 - JSON(foreachJSONReactive): functionality test by sending text parameters', () => {
  foreachJSONReactive('', () => {});
});



it('test 1 - JSON(oderJSONByReactive): functionality test', () => {
  expect(
    JSON.stringify(oderJSONByReactive(demoData, ['age', 'name', 'lastName']))
  ).toBe('{"age":23,"name":"Test Name","lastName":"Test Last Name"}');
});

it('test 2 - JSON(oderJSONByReactive): functionality test with fewer parameters', () => {
  expect(
    JSON.stringify(oderJSONByReactive(demoData, ['age', 'lastName']))
  ).toBe('{"age":23,"lastName":"Test Last Name"}');
});

it('test 3 - JSON(oderJSONByReactive): functionality test by sending null parameters', () => {
  oderJSONByReactive(demoDataNull, ['age', 'lastName']);
});

it('test 4 - JSON(oderJSONByReactive): functionality test with null parameters in order', () => {
  oderJSONByReactive(demoData, demoDataNull);
});



it('test 1 - JSON(convertJSONToArrayReactive): functionality test', () => {
  const demoData = {
    dataUno: 'uno',
    dataDos: 'dos',
    dataTres: 'tres'
  }

  expect(
    convertJSONToArrayReactive(demoData).toString()
  ).toBe('uno,dos,tres');
});

it('test 2 - JSON(convertJSONToArrayReactive): functionality test by sending null parameters', () => {
  convertJSONToArrayReactive(null);
});

it('test 3 - JSON(convertJSONToArrayReactive): functionality test by sending text parameters', () => {
  const demoData = {}

  expect(
    convertJSONToArrayReactive(demoData).toString()
  ).toBe('');
});



it('test 1 - JSON(removeInJSONArrayReactive): functionality test', () => {
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

it('test 2 - JSON(removeInJSONArrayReactive): functionality test by sending text parameters', () => {
  expect(
    removeInJSONArrayReactive(demoArrayData, '', 1).length
  ).toBe(4)
});

it('test 3 - JSON(removeInJSONArrayReactive): functionality test by sending null parameters', () => {
  expect(
    removeInJSONArrayReactive(demoDataNull, 'id', 1).length
  ).toBe(0)
});

it('test 4 - JSON(removeInJSONArrayReactive): functionality test by sending null parameters', () => {
  expect(
    removeInJSONArrayReactive(demoArrayData, 'id', null).length
  ).toBe(4)
});



it('test 1 - JSON(replaceInJSONArrayReactive): functionality test', () => {
  expect(
    JSON.stringify(replaceInJSONArrayReactive(demoArrayData, '_id', 1, { demoData: 'test' })[0])
  ).toBe('{"demoData":"test"}');
});

it('test 2 - JSON(replaceInJSONArrayReactive): functionality test by sending null parameters', () => {
  expect(
    JSON.stringify(replaceInJSONArrayReactive(demoDataNull, '_id', 1, { demoData: 'test' }).length)
  ).toBe('0');
});

it('test 3 - JSON(replaceInJSONArrayReactive): functionality test by sending text parameters', () => {
  expect(
    JSON.stringify(replaceInJSONArrayReactive(demoArrayData, '', 1, { demoData: 'test' }))
  ).toBe('[{"demoData":"test"},{"_id":2,"name":"Gilliam","lastName":"Wright","age":37},{"_id":3,"name":"Donaldson","lastName":"Knapp","age":2},{"_id":4,"name":"Meyers","lastName":"Phelps","age":58}]')
});

it('test 4 - JSON(replaceInJSONArrayReactive): functionality test by sending text parameters', () => {
  expect(
    JSON.stringify(replaceInJSONArrayReactive(demoArrayData, '', null, { demoData: 'test' }))
  ).toBe('[{"demoData":"test"},{"_id":2,"name":"Gilliam","lastName":"Wright","age":37},{"_id":3,"name":"Donaldson","lastName":"Knapp","age":2},{"_id":4,"name":"Meyers","lastName":"Phelps","age":58}]')
});



it('test 1 - JSON(getIndexInJSONArrayReactive): functionality test', () => {
  expect(
    JSON.stringify(getIndexInJSONArrayReactive(demoArrayData, 'name', 'Donaldson'))
  ).toBe('2');
});

it('test 2 - JSON(getIndexInJSONArrayReactive): functionality test by sending null parameters', () => {
  expect(
    getIndexInJSONArrayReactive(demoDataNull, 'name', 'Donaldson')
  ).toBe(-1);
});

it('test 3 - JSON(getIndexInJSONArrayReactive): functionality test by sending text parameters', () => {
  expect(
    getIndexInJSONArrayReactive(demoDataNull, '', 'Donaldson')
  ).toBe(-1);
});



it('test 1 - JSON(isJSONReactive): functionality test', () => {
  isJSONReactive(demoData);
});

it('test 2 - JSON(isJSONReactive): functionality test by sending text parameters', () => {
  isJSONReactive('');
});

it('test 3 - JSON(isJSONReactive): functionality test by sending null parameters', () => {
  isJSONReactive(null);
});