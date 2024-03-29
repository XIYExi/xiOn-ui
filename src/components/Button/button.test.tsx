import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Button from "./button";

const defaultProps = {
    onClick: jest.fn()
}

describe('test Button component', ()=>{
    it('should render the correct default button',()=>{
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const wrapper = render(<Button {...defaultProps}>Click Me</Button>);
        expect(wrapper).toBeInTheDocument();
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const element = wrapper.getByText("Click Me");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    })
    it('should render the correct component based on different props',()=>{

    })
    it('should render a link when btnType equals link and href is provided',()=>{

    })
    it('should render disabled button',()=>{

    })
})




