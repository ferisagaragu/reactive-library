import { splitArrayReactive, removeArrayByMatchReactive } from "./array.reactive";

const demoArray: Array<any> = ['uno', 'dos', 'tres', 'cuatro']; 
const demoArrayNull: any = null; 

it('test 1 - Array(splitArrayReactive): functionality test', () => {
  expect(splitArrayReactive(demoArray, 2).length).toBe(2);
});

it('test 2 - Array(splitArrayReactive): functionality test with an array that contains a number of elements not even', () => {
  const demoArray: Array<any> = ['uno', 'dos', 'tres', 'cuatro', 'cinco']; 
  expect(splitArrayReactive(demoArray, 2).length).toBe(3);
});

it('test 3 - Array(splitArrayReactive): functionality test by sending null parameters', () => {
  splitArrayReactive(demoArrayNull, 2);
});



it('test 1 - Array(removeArrayByMatchReactive): functionality test', () => {
  expect(removeArrayByMatchReactive(demoArray, 'dos').toString()).toBe('uno,tres,cuatro');
});

it('test 2 - Array(removeArrayByMatchReactive): functionality test by sending null parameters', () => {
  removeArrayByMatchReactive(demoArrayNull, 'dos');
});

it('test 3 - Array(removeArrayByMatchReactive): functionality test by sending null search parameters', () => {
  removeArrayByMatchReactive(demoArray, null);
});