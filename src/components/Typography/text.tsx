import classnames from 'classnames';
import {CSSProperties, FC} from "react";

export interface BaseTextProps{
    dropcap?: boolean;
    className?: string;
    style?:CSSProperties;
    background?: bgType;

    /*大小写*/
    write?:'upper'|'lower'

    /*首字母大写的时候是否以圆形的形式显示background 当dropcap和background同时存在时才会生效，默认为true*/
    circle?:boolean;

    [key:string]:any;
}

type presetGradient = 'gradient-1'|'gradient-2'|'gradient-3'|'gradient-4'|'gradient-5'|'gradient-6'|'gradient-7'|'gradient-8';

type themeGradientType = 'primary color' | 'orange color' | 'red color' | 'yellow color'
    | 'indigo color' | 'purple color' | 'green color' | 'teal color' | 'pink color' | 'cyan color';

type colorType = themeGradientType | 'white color' | 'sky color' | 'leaf color';

type bgType = presetGradient | colorType;


const Text:FC<BaseTextProps> = props => {
    const {
        circle,
        dropcap,
        className,
        style,
        background,
        children,
        write,
        animation,
        ...restProps
    } = props;

    /*首字母大写*/
    if (dropcap){
        return(
            <span className={classnames('lole-typography',className,{
                'circle': circle,
                'dropcap': true,
                [`lole-background ${background} background`]: background,
                'typography':true
            })}
                  style={style}
                  {...restProps}
            >
                {children}
            </span>
        )
    }

    return(
        <span className={classnames('lole-typography ',className,{
            [`${write}`]:write,
            'text':true,
            'typography':true
        })}
              style={style}
              {...restProps}
        >
            {children}
        </span>
    )
}

Text.defaultProps={
    dropcap:false,
    circle:true,
    animation:false,
}

export default Text;

