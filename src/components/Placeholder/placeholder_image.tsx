import classnames from "classnames";
import React, {CSSProperties, FC} from "react";
export interface BasePlaceHolderImageProps{
    className?:string;
    style?:CSSProperties;
    square?:boolean;
    rectangular?: boolean;
}

const PlaceholderImage:FC<BasePlaceHolderImageProps> = props =>{

    const { className, square, rectangular,style,...restProps } = props;

    const classes = classnames({
        'square':square,
        'rectangular': rectangular,
        'image': true
    }, className)

    return(
        <div className={classes} style={style} {...restProps}/>
    )

}

PlaceholderImage.defaultProps = {
    square: false,
    rectangular: false
}

export default PlaceholderImage;