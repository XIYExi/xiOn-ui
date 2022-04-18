import React, {CSSProperties, FC, TdHTMLAttributes} from "react";
import classnames from 'classnames';
import {returnWord} from "../utils/numToStr";


export interface BaseTableItemProps{
    active?: boolean;
    as?: 'td'|'th';
    className?:string;
    style?:CSSProperties;
    collapsing?:boolean;
    disabled?:boolean;
    error?:boolean;
    info?:boolean;
    primary?:boolean;
    warning?:boolean;
    textAlign?:textAlignType;
    verticalAlign?:verticalAlign;
    width?:widthType;
    selectable?:boolean;
    [key: string]: any;
}

type textAlignType = 'left' | 'center' | 'right';

type verticalAlign = 'bottom' | 'middle' | 'top';

export type widthType = 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|'one'|'two'|'three'|'four'|'five'|'six'|'seven'|'eight'|'nine'|'ten'|'eleven'|'twelve'|
    'thirteen'|'fourteen'|'fifteen'|'sixteen'|'seventeen'|'eighteen'|'nineteen'|'twenty'|'twenty-one'|'twenty-two'|'twenty-three'|'twenty-four';

export type TableItemProps = Partial<BaseTableItemProps & React.TdHTMLAttributes<HTMLElement>>;

const TableItem:FC<TableItemProps> = (props) => {

    const {
        as = 'td',
        active,
        className,
        style,
        collapsing,
        disabled,
        error,
        info,
        primary,
        warning,
        textAlign,
        verticalAlign,
        width,
        selectable,
        children,
        ...restProps
    } = props;

    const classes = classnames('',className,{
        'active': active,
        'disabled': disabled,
        'error': error,
        'warning': warning,
        'info': info,
        'primary': primary,
        [`${textAlign} aligned`]: textAlign,
        [`${verticalAlign} aligned`]: verticalAlign,
        'collapsing': collapsing,
        'selectable': selectable,
        [`${returnWord(width)} wide`]: width,
    });

    const childIsNull = (child: any) => child === null
        || child === undefined
        || (Array.isArray(child) && child.length === 0)


    if(as === 'th')
        return(
            <>
                <th className={classes} style={style} {...restProps}>
                    {
                        children
                    }
                </th>
            </>
        )


    return(
        <>
            <td className={classes} style={style} {...restProps}>
                {
                    children
                }
            </td>
        </>
    )
}

export default TableItem;