import { foreachJSONReactive, oderJSONByReactive } from "./json.reactive";

it('test 1 - JSON(foreachJSONReactive)', () => {
  const demoData: Array<any> = [
    {
      data:'uno'
    },{
      data:'dos'
    },{
      data:'tres'
    },{
      data:'cuatro'
    }
  ]
  
  foreachJSONReactive(demoData, () => {});
});

it('test 2 - JSON(foreachJSONReactive)', () => {
  const demoData: any = null;
  foreachJSONReactive(demoData, () => {});
});



it('test 1 - JSON(oderJSONByReactive)', () => {
  const demoData: any = {
    name: 'Test Name',
    lastName: 'Test Last Name',
    age: 23
  };

  expect(
    JSON.stringify(oderJSONByReactive(demoData, ['age', 'name', 'lastName']))
  ).toBe('{"age":23,"name":"Test Name","lastName":"Test Last Name"}');
});

it('test 2 - JSON(oderJSONByReactive)', () => {
  const demoData: any = {
    name: 'Test Name',
    lastName: 'Test Last Name',
    age: 23
  };

  expect(
    JSON.stringify(oderJSONByReactive(demoData, ['age', 'lastName']))
  ).toBe('{"age":23,"lastName":"Test Last Name"}');
});

it('test 3 - JSON(oderJSONByReactive)', () => {
  const demoData: any = null;
  oderJSONByReactive(demoData, ['age', 'lastName']);
});

it('test 4 - JSON(oderJSONByReactive)', () => {
  const demoData: any = {
    name: 'Test Name',
    lastName: 'Test Last Name',
    age: 23
  };
  const orderDemo: any = null;

  oderJSONByReactive(demoData, orderDemo);
});