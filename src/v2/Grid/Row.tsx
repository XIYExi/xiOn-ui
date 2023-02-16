import React, {FC} from "react";
import classNames from "classnames";
import {CommonInterface} from "../type";
import {GridOnlyProp, GridReversedProp, SemanticWIDTHS, TTextAlign, TVertical} from "./type";
import {useMultipleProp, useWidthProp} from "../utils";
import classnames from "classnames";


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

    const classname = classnames('lole', {
            'centered': centered,
            'divided': divided,
            'stretched': stretched,
            [`${textAlign} aligned`]:textAlign,
            [`${verticalAlign} aligned`]: verticalAlign,
        },
        useMultipleProp(only, 'only'),
        useMultipleProp(reversed, 'reversed'),
        useWidthProp(columns, 'columns', true),
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