import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';

export interface BaseImageProps{
    alt:string;
    src:string;

    as?:string;
    href?:string;

    avatar?:boolean;
    bordered?:boolean;
    centered?:boolean;
    circular?:boolean;
    className?:string;
    style?:CSSProperties;
    disabled?:boolean;
    floated?:ImageFloatedType;
    fluid?:boolean;
    hidden?:boolean;
    inline?: boolean;
    rounded?: boolean;
    size?: ImageSizeType;
    spaced?: ImageSpacedType;
    verticalAlign?: ImageVerticalAlignType;
    [key:string]:any;
}

type ImageSizeType = 'mini' | 'tiny' | 'small' | 'medium' | 'large';

type ImageSpacedType = boolean | 'left' | 'right';

type ImageVerticalAlignType = 'top' | 'middle' | 'bottom';

type ImageFloatedType = 'left'|'right';

const Image:FC<BaseImageProps> = (props) => {

    const {
        as,
        avatar,
        href,
        bordered,
        centered,
        style,
        src,
        alt,
        circular,
        className,
        disabled,
        floated,
        fluid,
        hidden,
        inline,
        rounded,
        size,
        spaced,
        verticalAlign,
        ...restProps
    } = props

    const classes = classnames('lole-image',className,{
        [`${size}`]: size,
        'avatar':avatar,
        'bordered': bordered,
        'circular':circular,
        'centered': centered,
        'disabled': disabled,
        'fluid': fluid,
        'hidden': hidden,
        'inline': inline,
        'rounded': rounded,
        [`${spaced===true?'spaced':spaced+' spaced'}`]: spaced,
        [`${floated} floated`]: floated,
        [`${verticalAlign} aligned`]: verticalAlign,
        'image':true
    })

    if (as === 'a'){
        return (
            <a href={href}
               className={classes}
               style={style}
               {...restProps}
            >
                <img alt={alt}
                     src={src}
                />
            </a>
        )
    }

    return(
        <>
            <img alt={alt}
                 src={src}
                 className={classes}
                 style={style}
                 {...restProps}
            />
        </>
    )

}

Image.defaultProps={
    avatar:false,
    bordered:false,
    centered:false,
    circular:false,
    disabled:false,
    fluid:false,
    hidden:false,
    inline:false,
    rounded:false,
    spaced:false,
}

export default Image;