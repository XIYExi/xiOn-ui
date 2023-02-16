import React, {FC} from "react";
import {CommonInterface} from "../type";
import {
    GridOnlyProp,
    GridReversedProp,
    SemanticWIDTHS,
    TTextAlign,
    TVertical
} from "./type";
import classnames from "classnames";
import {
    handleMultipleProp,
    handleTextAlignProp,
    handleVerticalAlignProp,
    handleWidthProp
} from "../use";


interface IRow extends CommonInterface {

    centered?: boolean;

    columns?: SemanticWIDTHS | 'equal';

    divided?:boolean;

    only?:GridOnlyProp;

    reversed?: GridReversedProp;

    stretched?:boolean;

    textAlign?: TTextAlign;

    verticalAlign?: TVertical;

    [key:string]: any;
}

const Row:FC<IRow> = (props) => {

    const {
        id,
        centered,
        style,
        children,
        className,
        columns,
        divided,
        only,
        reversed,
        stretched,
        textAlign,
        verticalAlign,
        ...restProps
    } = props;

    const classname = classnames( {
            'centered': centered,
            'divided': divided,
            'stretched': stretched,
        },
        handleMultipleProp(only, 'only'),
        handleMultipleProp(reversed, 'reversed'),
        handleTextAlignProp(textAlign),
        handleVerticalAlignProp(verticalAlign),
        handleWidthProp(columns, 'columns', true),
        'row',
        className
    );


    return (
        <React.Fragment>
            <div
                id={id}
                className={classname}
                style={style}
                {...restProps}
            >
                {children}
            </div>
        </React.Fragment>
    )
}

export default Row;