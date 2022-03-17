import React from "react";
import {cleanup, fireEvent, render, RenderResult} from "@testing-library/react";
import Menu, {MenuProps} from './menu';
import MenuItem from "./menuItem";
import exp from "constants";

const testProps:MenuProps={
    defaultIndex:'0',
    onSelect:jest.fn(),
    className:'test',
}
const testVerProps:MenuProps={
    defaultIndex:'0',
    mode:'vertical',
}
const TestMenu = (props: MenuProps)=>{
    return(
        <Menu {...props}>
            <MenuItem>active</MenuItem>
            <MenuItem disabled>disabled</MenuItem>
            <MenuItem>test_menu</MenuItem>
        </Menu>
    )
}

let wrapper:RenderResult,menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement;


describe('test Menu and MenuItem component',()=>{
    beforeEach(()=>{
        wrapper = render(TestMenu(testProps));
        menuElement = wrapper.getByTestId('test-menu');
        activeElement = wrapper.getByText('active');
        disabledElement = wrapper.getByText('disabled');
    })
    it('should render correct Menu and MenuItem on default props', function () {
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('xiOn-menu test');
        expect(menuElement.getElementsByTagName('li').length).toEqual(3);
        expect(activeElement).toHaveClass('menu-item is-active');
        expect(disabledElement).toHaveClass('menu-item is-disabled');
    });
    it('click items should change active and call the right callback', function () {
        const thirditem = wrapper.getByText('test_menu');
        fireEvent.click(thirditem);
        expect(thirditem).toHaveClass('is-active');
        expect(activeElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).toHaveBeenCalledWith(2);
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
    });
    it('should render vertical mode when mode is set to vertical', function () {
        cleanup();
        const wrapper = render(TestMenu(testVerProps));
        const menuItem = wrapper.getByTestId('test-menu');
        expect(menuItem).toHaveClass('menu-vertical');
    });
})
