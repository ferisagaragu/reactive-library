import { WindowEventReactive } from './window-event.reactive';

it('test 1 - WindowEvent: functionality', () => {
  const instance = new WindowEventReactive();
  instance.onWindowResize(() => {});
  window.dispatchEvent(new Event('resize'));
});

it('test 2 - WindowEvent: functionality test by resize window', () => {
  const instance = new WindowEventReactive();
  instance.getWindowSize(200);
  instance.getWindowSize(600);
  instance.getWindowSize(800);
  instance.getWindowSize(100);
  instance.getWindowSize(1300);
});

it('test 3 - WindowEvent: functionality test by repeat resize window', () => {
  const instance = new WindowEventReactive();
  instance.onInit = false;
  instance.onWindowResize(() => {});
  window.dispatchEvent(new Event('resize'));
});