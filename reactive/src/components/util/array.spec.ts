import { splitArrayReactive, removeArrayByMatchReactive } from "./array.reactive";

it('test 1 - Array(splitArrayReactive)', () => {
  const demoArray: Array<any> = ['uno', 'dos', 'tres', 'cuatro']; 
  expect(splitArrayReactive(demoArray, 2).length).toBe(2);
});

it('test 2 - Array(splitArrayReactive)', () => {
  const demoArray: Array<any> = ['uno', 'dos', 'tres', 'cuatro', 'cinco']; 
  expect(splitArrayReactive(demoArray, 2).length).toBe(3);
});

it('test 3 - Array(splitArrayReactive)', () => {
  const demoArray: any = null; 
  splitArrayReactive(demoArray, 2);
});



it('test 1 - Array(removeArrayByMatchReactive)', () => {
  const demoArray: Array<any> = ['uno', 'dos', 'tres', 'cuatro']; 
  expect(removeArrayByMatchReactive(demoArray, 'dos').toString()).toBe('uno,tres,cuatro');
});

it('test 2 - Array(removeArrayByMatchReactive)', () => {
  const demoArray: any = null; 
  removeArrayByMatchReactive(demoArray, 'dos');
});

it('test 3 - Array(removeArrayByMatchReactive)', () => {
  const demoArray: Array<any> = ['uno', 'dos', 'tres', 'cuatro'];
  removeArrayByMatchReactive(demoArray, null);
});