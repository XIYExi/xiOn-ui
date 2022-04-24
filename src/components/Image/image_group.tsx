import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';


export interface BaseImageGroupProps{
    className?:string;
    style?:CSSProperties;
    size?:imageGroupSize;
    [key:string]:any;
}

type imageGroupSize =  'mini' | 'tiny' | 'small' | 'medium' | 'large';

const ImageGroup:FC<BaseImageGroupProps> = (props) => {

    const { children, className, size, style, ...restProps } = props

    return(
        <>
            <div className={classnames('lole-image',className,{
                [`${size}`]: size,
                'images':true
            })}
                 style={style}
                 {...restProps}
            >
                {
                    children
                }
            </div>
        </>
    )
}


export default ImageGroup;