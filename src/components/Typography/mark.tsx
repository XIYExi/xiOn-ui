import classnames from "classnames";
import {CSSProperties, FC} from "react";

export interface BaseMarkProps{
    className?:string;
    style?:CSSProperties;
    [key:string]:any;
}

const Mark:FC<BaseMarkProps> = (props)=>{

    const {
        children,
        className,
        style,
        ...restProps
    } = props;

    return (
        <span className={classnames('lole-typography mark typography',className)} style={style} {...restProps}>
            {children}
        </span>
    )
}

export default Mark;
