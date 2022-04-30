import classnames from 'classnames';
import React, {CSSProperties, FC} from "react";
import {judgeChildIsNull} from "../utils/judgeChildIsNull";

export interface BasePlaceholderProps{
    className?:string;
    style?:CSSProperties;
    fluid?:boolean;
    inverted?:boolean;
    content?:React.ReactNode;
    [key: string]: any
}

const Placeholder:FC<BasePlaceholderProps> = props => {

    const { children,content, className, fluid, inverted, style,...restProps } = props

    const classes = classnames('lole-placeholder',className, {
        'fluid': fluid,
        'inverted': inverted,
        'placeholder': true
    })

    return(
        <div className={classes} style={style} {...restProps}>
            {
                judgeChildIsNull(children) ? content : children
            }
        </div>
    )

}

Placeholder.defaultProps = {
    fluid:false,
    inverted: false
}

export default Placeholder;