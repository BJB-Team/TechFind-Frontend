import { configure, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import { Login } from './login';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('Login Component', () => {
  it('should render properly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render an email input tag', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
  });

});