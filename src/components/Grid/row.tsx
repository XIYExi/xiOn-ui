import React, {Component} from "react";
import classNames from "classnames";
import RowContext from "./row_context";


interface RowProps extends React.HTMLAttributes<HTMLDivElement>{
    gutter?: number;
}

const Row:React.FC<RowProps> = (props) => {

    const {
        gutter,
        children,
        style,
    } = props;

    const rowContext = React.useMemo(() => ({ gutter }), [gutter]);

    const rowStyle: React.CSSProperties = {...style};

    if (gutter && gutter>0){
        rowStyle.marginLeft = gutter / -2;
        rowStyle.marginRight = gutter / -2;
    }

    return(
        <>
            <RowContext.Provider value={rowContext}>
                <div className='row' style={{...rowStyle}}>
                    {children}
                </div>
            </RowContext.Provider>
        </>
    )

}

export default Row;