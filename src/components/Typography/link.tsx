import classnames from 'classnames';
import {CSSProperties, FC} from "react";

export interface BaseLinkProps{
    className?:string;
    style?:CSSProperties;
    hover?: boolean | 'type2' | 'type3';
    more?:boolean;
    color?: colorType;
    href?:string;
    [key:string]:any;
}

type themeGradientType = 'primary' | 'orange' | 'red' | 'yellow' | 'indigo' | 'purple' | 'green' | 'teal' | 'pink' | 'cyan';

type colorType = themeGradientType | 'white' | 'sky' | 'leaf'| 'body';

const Link:FC<BaseLinkProps> = props => {

    const {
        className,
        style,
        hover,
        more,
        color,
        children,
        href,
        ...restProps
    } = props;

    const classes = classnames('lole-typography',className,{
        'more':more,
        [`link-${color}`]:color,
        [hover===true?`hover` : `hover-${(hover as any).split('type')[1]}`]:hover,
        'typography':true
    })

    return(
        <a href={href} className={classes} style={style} {...restProps}>
            {children}
        </a>
    )
}

Link.defaultProps={
    hover:true,
    more:false
}

export default Link;