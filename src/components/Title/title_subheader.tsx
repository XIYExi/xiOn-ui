import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';
import {judgeChildIsNull} from "../utils/judgeChildIsNull";

export interface BaseHeaderSubheaderProps{
    className?: string;
    style?:CSSProperties;
    container?:React.ReactNode;
    [key:string]:any;
}

const TitleSubheader:FC<BaseHeaderSubheaderProps> = (props) => {
    const { children, className, container, style, ...restProps } = props

    return(
        <div className={classnames('sub header',className)} style={style} {...restProps}>
            {
                judgeChildIsNull(children) ? container : children
            }
        </div>
    )
}

export default TitleSubheader;