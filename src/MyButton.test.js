import React from 'react';
import MyButton from "./MyButton"
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


it ('should be able to render', () => {
    const wrapper = shallow(<MyButton/>);
    wrapper.find("button").simulate('click');
    wrapper.find("button").simulate('click');
    wrapper.find("button").simulate('click');
    const result = wrapper.find("button").props();
    expect(result.children).toBe(4);
});


it('should be able to keep track of the dom with each subsequent call', () => {
    const component = renderer.create(
        <MyButton/>
    );

    let button = component.toJSON();
    expect(button).toMatchSnapshot();

    button.props.onClick();
    expect(button).toMatchSnapshot();

    button.props.onClick();
    expect(button).toMatchSnapshot();
});