import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';

export interface BaseTableHeaderProps{
    className?:string;
    style?:CSSProperties;
    fullWidth?:boolean;
}


const TableHeader:FC<BaseTableHeaderProps> = (props) => {

    const {
        className,
        style,
        children,
        fullWidth,
    } = props;

    const classes = classnames('',className,{
        'full-width': fullWidth,
    })

    return(
        <>
            <thead className={classes} style={style}>
            {
                children
            }
            </thead>
        </>
    )

}

export default TableHeader;
