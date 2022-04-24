import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';
import {judgeChildIsNull} from "../utils/judgeChildIsNull";
import Statistic, {BaseStatisticProps} from "./statistic";
import _ from 'lodash'

export type StaticItem<TProps extends Record<string, any>> =React.ReactNode | TProps;

export interface BaseStatisticGroupProps{
    className?: string;
    color?: colorType;
    horizontal?: boolean;
    size?: sizeType;
    widths?: statisticWidths;
    style?:CSSProperties;
    items?: StaticItem<BaseStatisticProps>;
    [key:string]:any;
}


type colorType = 'primary'| 'orange'| 'yellow'| 'indigo'| 'green'| 'teal'| 'red'| 'purple'|'pink'| 'cyan'| 'gray';

type sizeType = 'mini' | 'tiny' | 'small' | 'large' | 'huge';

type statisticWidths = 'one'|'two'|'three'|'four'|'five'|'six'|'seven'|'eight'|'nine'|'ten';


const StatisticGroup:FC<BaseStatisticGroupProps> = (props)=>{
    const {
        children,
        className,
        style,
        color,
        horizontal,
        size,
        widths,
        items,
        ...restProps
    } = props;

    const classes = classnames('lole-statistic',className,{
        [`${color}`]: color,
        [`${size}`]: size,
        [`${widths}`]: widths,
        'horizontal': horizontal,
        'statistics':true
    })

    /**判断group内部children是否为null，不为空就按照标签渲染
     * */
    if (!judgeChildIsNull(children)){
        return(
            <div className={classes} style={style} {...restProps}>
                {
                    children
                }
            </div>
        )
    }

    /**否则按照json数据批量渲染
     * */
    return(
        <div className={classes} style={style} {...restProps}>
            {
                _.map(items as any, (item) => <Statistic {...item}/>)
            }
        </div>
    )
}

export default StatisticGroup;

