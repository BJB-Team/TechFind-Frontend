import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import React from 'react';
import { Login } from './login';

configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

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