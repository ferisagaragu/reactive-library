import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

export const testRender = Enzyme.render;
export const testShallow =  Enzyme.shallow;
export const testMount = Enzyme.mount;
export const testShallowWrapper = Enzyme.ShallowWrapper;
export const testReactWrapper = Enzyme.ReactWrapper;
export const testEnzymeAdapter = Enzyme.EnzymeAdapter;