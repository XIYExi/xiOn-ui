import React from "react";
import classNames from 'classnames';

export interface RadioBaseProps{
    className?:string;
    style?:React.CSSProperties;
}

const Radio:React.FC<RadioBaseProps> = (props) => {

    const {
        className,
        style,
        ...restProps
    } = props;

    const classes = classNames('xiOn-radio',className,{

    })

    return(
        <>

        </>
    )
}

Radio.defaultProps={

}

export default Radio;
