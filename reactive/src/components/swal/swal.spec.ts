import { toastReactive, alertReactive, alertQuestionReactive } from "./swal.reactive";

global['window'].scrollTo = jest.fn(() => 'details');

it('test 1 - toastReactive: functionality test', () => {
  toastReactive('info','data','bottom');
});

it('test 2 - toastReactive: functionality test by default position', () => {
  toastReactive('info','data');
});


it('test 1 - alertReactive: functionality test', () => {
  alertReactive('info','title','text');
});


it('test 1 - alertQuestionReactive: functionality test', () => {
  alertQuestionReactive('info','title','text', () => {}, () => {});
});
-
it('test 2 - alertQuestionReactive: functionality test by click in button "Aceptar" y "Cancelar"', () => {
  alertQuestionReactive('info','title','text', () => {}, () => {});
  document.querySelectorAll('button')[1].click();

  alertQuestionReactive('info','title','text', () => {}, () => {});
  document.querySelectorAll('button')[2].click();
});