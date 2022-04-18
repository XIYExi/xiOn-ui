import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';

export interface BaseTableFooterProps{
    className?:string;
    style?:CSSProperties;
}

const TableFooter:FC<BaseTableFooterProps> = (props) => {

    const {className, style, children} = props;

    return(
        <>
            <tfoot className={classnames('',className)} style={style}>
            {
                children
            }
            </tfoot>
        </>
    )
}

export default TableFooter;