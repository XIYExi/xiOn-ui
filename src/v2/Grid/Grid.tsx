import React from "react";
import classnames from 'classnames';
import {CommonInterface} from "../type";
import {
    GridReversedProp,
    SemanticWIDTHS,
    TTextAlign,
    TVertical
} from "./type";

import {
    handleKeyOrValueAndKey,
    handleMultipleProp,
    handleTextAlignProp,
    handleVerticalAlignProp,
    handleWidthProp
} from "../use";
import Column from "./Column";
import Row from './Row';


interface IGrid extends CommonInterface {

    celled?: boolean | 'internally';

    centered?: boolean;

    columns?: SemanticWIDTHS | 'equal';

    container?: boolean;

    divided?: boolean | 'vertically';

    doubling?: boolean;

    inverted?: boolean;

    padding?: boolean | 'horizontally' | 'vertically';

    reversed?: GridReversedProp;

    stackable?: boolean;

    stretched?: boolean;

    textAlign?: TTextAlign;

    verticalAlign?: TVertical;

    [key:string]: any;
}

interface GridComponent extends React.FC<IGrid> {
    Column: typeof Column;
    Row: typeof Row;
}


const Grid: GridComponent = (props) => {

    const {
        id,
        style,
        celled,
        centered,
        children,
        className,
        columns,
        container,
        divided,
        doubling,
        inverted,
        padded,
        relaxed,
        reversed,
        stackable,
        stretched,
        textAlign,
        verticalAlign,
        ...restProps
    } = props

    const classname = classnames('lole',
        {
            'centered': centered,
            'container': container,
            'doubling': doubling,
            'inverted': inverted,
            'stackable': stackable,
            'stretched': stretched,
        },
        handleKeyOrValueAndKey(celled, 'celled'),
        handleKeyOrValueAndKey(divided, 'divided'),
        handleKeyOrValueAndKey(padded, 'padded'),
        handleMultipleProp(reversed, 'reversed'),
        handleTextAlignProp(textAlign),
        handleVerticalAlignProp(verticalAlign),
        handleWidthProp(columns, 'column', true),
        'grid',
        className
    );

    return (
        <React.Fragment>
            <div
                className={classname}
                style={style}
                id={id}
                {...restProps}
            >
                {children}
            </div>
        </React.Fragment>
    )
}

Grid.Column = Column;
Grid.Row = Row;

export default Grid;