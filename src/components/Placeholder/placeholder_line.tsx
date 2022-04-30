import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';

export interface BasePlaceholderLineProps{
    className?:string;
    style?:CSSProperties;
    length?: 'full' | 'long' | 'medium' | 'short';
    [key:string]:any;
}

const PlaceholderLine:FC<BasePlaceholderLineProps> = props => {
    const { className, length,style, ...restProps} = props

    const classes = classnames('line', className, {
        [`${length}`]: length
    })

    return(
        <div className={classes} style={style} {...restProps}/>
    )
}

export default PlaceholderLine;