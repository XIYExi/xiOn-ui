import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';

export interface BaseStatisticValueProps{
    className?:string;
    style?:CSSProperties;
    text?:boolean;
    [key:string]:any;
}

const StatisticValue:FC<BaseStatisticValueProps> = (props)=>{

    const { children, className, text, style, ...restProps} = props

    return(
        <div className={classnames({
            'text':text,
            'value':true
        }, className)}
             style={style}
             {...restProps}
        >
            {
                children
            }
        </div>
    )
}

StatisticValue.defaultProps = {
    text: false
}

export default StatisticValue;