import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';

export interface BaseTableBodyProps{
    className?:string;
    style?:CSSProperties;
}

const TableBody:FC<BaseTableBodyProps> = (props) => {

    const {
        className,
        style,
        children
    } = props;

    return(
        <>
            <tbody className={classnames('',className)} style={style}>
            {
                children
            }
            </tbody>
        </>
    )
}

export default TableBody;