import React, {useContext, CSSProperties} from "react";
import classNames from 'classnames';
import RowContext from "./row_context";

interface ColProps extends React.HTMLAttributes<HTMLDivElement>{
    span: number;
}

function Col(props: ColProps) {
    const {
        children,
        span,
        style,
    } = props;

    const classObj = {
        [`col-${span}`]: span !== void 0
    }
    const classes = classNames('col', classObj);

    const { gutter } = useContext(RowContext);
    const styleObj: CSSProperties = {...style};
    if (gutter && gutter > 0) {
        const horizontalGutter = gutter / 2;
        styleObj.paddingLeft = horizontalGutter;
        styleObj.paddingRight = horizontalGutter;
    }

    return (
        <div className={classes} style={{...styleObj}}>
            { children }
        </div>
)
}

export default Col;