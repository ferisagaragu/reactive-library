import { splitArrayReactive, removeArrayByMatchReactive } from "./array.reactive";

const demoArray: Array<any> = ['uno', 'dos', 'tres', 'cuatro']; 
const demoArrayNull: any = null; 

it('test 1 - Array(splitArrayReactive)', () => {
  expect(splitArrayReactive(demoArray, 2).length).toBe(2);
});

it('test 2 - Array(splitArrayReactive)', () => {
  const demoArray: Array<any> = ['uno', 'dos', 'tres', 'cuatro', 'cinco']; 
  expect(splitArrayReactive(demoArray, 2).length).toBe(3);
});

it('test 3 - Array(splitArrayReactive)', () => {
  splitArrayReactive(demoArrayNull, 2);
});



it('test 1 - Array(removeArrayByMatchReactive)', () => {
  expect(removeArrayByMatchReactive(demoArray, 'dos').toString()).toBe('uno,tres,cuatro');
});

it('test 2 - Array(removeArrayByMatchReactive)', () => {
  removeArrayByMatchReactive(demoArrayNull, 'dos');
});

it('test 3 - Array(removeArrayByMatchReactive)', () => {
  removeArrayByMatchReactive(demoArray, null);
});