import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';
import {judgeChildIsNull} from "../utils/judgeChildIsNull";

export interface BasePlaceholderParagraph{
    className?:string;
    style?:CSSProperties;
    content?:React.ReactNode;
    [key:string]:any;
}

const PlaceholderParagraph:FC<BasePlaceholderParagraph> = props => {
    const { children, className, content,style,...restProps } = props

    const classes = classnames('paragraph',className)

    return(
        <div className={classes} style={style} {...restProps}>
            {judgeChildIsNull(children) ? content : children}
        </div>
    )
}

export default PlaceholderParagraph;
