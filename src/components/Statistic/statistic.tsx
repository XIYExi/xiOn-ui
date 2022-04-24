import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';
import {judgeChildIsNull} from "../utils/judgeChildIsNull";
import StatisticValue from "./statistic_value";
import StatisticLabel from "./statistic_label";

export interface BaseStatisticProps{
    className?:string;
    style?:CSSProperties;
    color?:colorType;
    floated?:floatedType;
    horizontal?:boolean;
    size?:sizeType;
    text?: boolean;
    [key:string]:any;
    label?:React.ReactNode;
    value?:React.ReactNode;

}

type colorType = 'primary'| 'orange'| 'yellow'| 'indigo'| 'green'| 'teal'| 'red'| 'purple'|'pink'| 'cyan'| 'gray';

type floatedType = 'left' | 'right';

type sizeType = 'mini' | 'tiny' | 'small' | 'large' | 'huge';

const Statistic:FC<BaseStatisticProps> = (props) => {

    const {
        children,
        text,
        style,
        className,
        color,
        floated,
        horizontal,
        size,
        label,
        value,
        ...restProps
    } = props

    const classes = classnames('lole-statistic',className,{
        [`${color}`]: color,
        [`${size}`]: size,
        [`${floated} floated`]: floated,
        'horizontal': horizontal,
        'statistic': true
    })

    /**判断内部有标签则按照内部标签渲染
     * */
    if(!judgeChildIsNull(children)){
        return(
            <>
                <div className={classes} style={style} {...restProps}>
                    {
                        children
                    }
                </div>
            </>
        )
    }

    /**否则进行快速渲染　
     * */
    return(
        <>
            <div className={classes} style={style} {...restProps}>
                <StatisticValue text={text}>{value}</StatisticValue>
                <StatisticLabel>{label}</StatisticLabel>
            </div>
        </>
    )
}

Statistic.defaultProps = {
    horizontal: false,
    text: false,
}

export default Statistic;

