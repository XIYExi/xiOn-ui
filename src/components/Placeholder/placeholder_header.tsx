import classnames from 'classnames';
import React, {CSSProperties, FC} from "react";
import {judgeChildIsNull} from "../utils/judgeChildIsNull";

export interface BasePlaceholderHeader{
    className?:string;
    image?:boolean;
    style?:CSSProperties;
    content?:React.ReactNode;
    [key:string]:any;
}

const PlaceholderHeader:FC<BasePlaceholderHeader> = props => {

    const { children, className, content, image, style,...restProps } = props
    const classes = classnames({
        'image':image,
        'header': true
    }, className)

    return(
        <div className={classes} style={style} {...restProps}>
            {judgeChildIsNull(children) ? content : children}
        </div>
    )
}

PlaceholderHeader.defaultProps={
    image:false
}

export default PlaceholderHeader;