import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';
import TableItem, {widthType} from "./TableItem";
import {returnWord} from "../utils/numToStr";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";
import TableHeaderItem from "./TableHeaderItem";
import TableHeader from "./TableHeader";

export interface BaseTableProps{

    attached?:'top' | 'bottom',
    celled?:boolean;
    className?:string;
    style?:CSSProperties;
    color?:colorType;
    columns?:widthType;
    compact?:boolean;
    definition?:boolean;
    fixed?:boolean;
    inverted?:boolean;
    padded?:boolean;
    selectable?:boolean;
    size?:sizeType;
    sortable?:boolean;
    striped?:boolean;
    structured?:boolean;
    textAlign?: textAlignType;
    verticalAlign?: verticalAlign;
}

type colorType = 'primary'|'indigo'|'purple'|'pink'|'red'|'orange'|'yellow'|'green'|'teal'|'cyan'|'gray'|'black';

type sizeType = 'small'|'large';

type textAlignType = 'left' | 'center' | 'right';

type verticalAlign = 'bottom' | 'middle' | 'top';


const Table:FC<BaseTableProps> = (props) => {
    const {
        attached,
        celled,
        children,
        className,
        color,
        columns,
        compact,
        definition,
        fixed,
        inverted,
        padded,
        selectable,
        size,
        sortable,
        striped,
        structured,
        textAlign,
        verticalAlign,
        style
    } = props

    const classes = classnames('lole-table',className, {
        [`${color}`]: color,
        [`${size}`]: size,
        'celled': celled,
        'definition':definition,
        'fixed':fixed,
        'inverted':inverted,
        'selectable':selectable,
        'sortable':sortable,
        'striped':striped,
        'structured':structured,
        'compact': compact,
        'padded': padded,
        [`${attached} attached`]: attached,
        [`${textAlign} aligned`]: textAlign,
        [`${verticalAlign} aligned`]: verticalAlign,
        [`${returnWord(columns)} wide`]: columns,
        'table': true,
    })


    const childIsNull = (child: any) => child === null
        || child === undefined
        || (Array.isArray(child) && child.length === 0)

    if (!childIsNull(children)) {
        return (
            <table className={classes} style={style}>
                {
                    children
                }
            </table>
        )
    }

    return (
        <>
        </>
    )

}


export default Table;