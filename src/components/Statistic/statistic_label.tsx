import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';

export interface BaseStatisticLableProps{
    className?:string;
    style?:CSSProperties;
    [key:string]:any;
}

const StatisticLabel:FC<BaseStatisticLableProps> = (props) => {

    const { children, className, style, ...restProps } = props

    return(
        <div className={classnames('label',className)}
             style={style}
             {...restProps}
        >
            {
                children
            }
        </div>
    )
}

export default StatisticLabel;