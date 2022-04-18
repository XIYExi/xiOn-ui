import React, {CSSProperties, FC, TdHTMLAttributes, ThHTMLAttributes} from "react";
import classnames from 'classnames';
import TableItem from "./TableItem";

export interface BaseTableHeaderItemProps{
    className?:string;
    sorted?:'ascending'|'descending';
    [key:string]:any;
}

//export type TableHeaderItemProps = Partial<BaseTableHeaderItemProps & ThHTMLAttributes<HTMLElement>>;

const TableHeaderItem:FC<BaseTableHeaderItemProps>  = (props) => {

    const {className, sorted,...restProps} = props;

    return <TableItem className={classnames('',className,{
        'sorted': sorted
        })}
      as='th' {...restProps}
    />
}

export default TableHeaderItem;