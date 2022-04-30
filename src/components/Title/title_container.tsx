import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';
import {judgeChildIsNull} from "../utils/judgeChildIsNull";

export interface BaseHeaderContainerProps{
    className?: string;
    style?:CSSProperties;
    container?: React.ReactNode;
}

const TitleContainer:FC<BaseHeaderContainerProps> = (props) => {
    const { children, className, container,style } = props

    return(
        <div className={classnames('container',className)} style={style}>
            {
                judgeChildIsNull(children) ? container : children
            }
        </div>
    )
}

export default TitleContainer;