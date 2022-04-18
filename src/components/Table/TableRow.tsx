import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';
import TableItem from "./TableItem";

export interface BaseTableRowProps{
    active?:boolean;
    className?:string;
    style?:CSSProperties;
    disabled?:boolean;
    error?:boolean;
    info?:boolean;
    primary?:boolean;
    warning?:boolean;
    textAlign?: textAlignType;
    verticalAlign?: verticalAlign;
}

type textAlignType = 'left' | 'center' | 'right';

type verticalAlign = 'bottom' | 'middle' | 'top';

const TableRow:FC<BaseTableRowProps> = (props) => {

    const {
        active,
        className,
        style,
        disabled,
        error,
        info,
        primary,
        warning,
        textAlign,
        verticalAlign,
        children,
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
    })

    /**判断children是否为空
     * */
    const childIsNull = (child: any) => child === null
        || child === undefined
        || (Array.isArray(child) && child.length === 0)


    /**正常渲染流程，当判断children不为空，即<TableRow>中包裹<TableItem>的时候直接渲染出来
     * */
    if (!childIsNull(children))
        return (
            <>
                <tr className={classes} style={style}>
                    {
                        children
                    }
                </tr>
            </>
        )

    /**这里判断children为空的渲染流程，即用户没有自定义表，而是通过传递columns和data来自动渲染
     * */
    return (
        <>
            <tr className={classes} style={style}>
                {
                    React.Children.map(children, (item, index)=>{
                        <TableItem/>
                    })
                }
            </tr>
        </>
    )
}

export default TableRow;