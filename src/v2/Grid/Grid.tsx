import React, {FC} from "react";
import classnames from 'classnames';
import {CommonInterface} from "../type";
import {GridReversedProp, SemanticWIDTHS, TTextAlign, TVertical} from "./type";
import {useMultipleProp, useWidthProp} from "../utils";
import {useKeyOrValueAndKey, useTextAlignProp, useVerticalAlignProp} from "../use";


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

const Grid:FC<IGrid> = (props) => {

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
        useKeyOrValueAndKey(celled, 'celled'),
        useKeyOrValueAndKey(divided, 'divided'),
        useKeyOrValueAndKey(padded, 'padded'),
        useMultipleProp(reversed, 'reversed'),
        useTextAlignProp(textAlign),
        useVerticalAlignProp(verticalAlign),
        useWidthProp(columns, 'column', true),
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

export default Grid;