import React, {FC} from "react";
import classnames from 'classnames';
import {CommonInterface} from "../type";
import {GridOnlyProp, SemanticWIDTHS, TFloated, TTextAlign, TVertical} from "./type";
import {useMultipleProp, useWidthProp} from "../utils";
import {useTextAlignProp, useVerticalAlignProp} from "../use";


interface IColumn extends CommonInterface {

    computer?: SemanticWIDTHS;

    floated?: TFloated;

    largeScreen?: SemanticWIDTHS;

    mobile?: SemanticWIDTHS;

    only?: GridOnlyProp;

    stretched?:boolean;

    tablet?: SemanticWIDTHS;

    textAlign?: TTextAlign;

    verticalAlign?:TVertical;

    widescreen?:SemanticWIDTHS;

    width?: SemanticWIDTHS;

    [key:string]: any;
}


const Column:FC<IColumn> = (props) => {

    const {
        id,
        children,
        className,
        computer,
        color,
        floated,
        largeScreen,
        mobile,
        only,
        stretched,
        tablet,
        textAlign,
        verticalAlign,
        style,
        widescreen,
        width,
        ...restProps
    } = props;

    const classname = classnames(
        {
            'stretched': stretched,
            [`${floated} floated`]: floated,
        },
        useMultipleProp(only,'only'),
        useWidthProp(computer, 'wide computer'),
        useWidthProp(largeScreen, 'wide large screen'),
        useWidthProp(mobile, 'wide mobile'),
        useWidthProp(tablet, 'wide tablet'),
        useWidthProp(widescreen, 'wide widescreen'),
        useWidthProp(width, 'wide'),
        useTextAlignProp(textAlign),
        useVerticalAlignProp(verticalAlign),
        'column',
        className
    );

    return (
        <React.Fragment>
            <div
                className={classname}
                style={style}
                {...restProps}
            >
                {children}
            </div>
        </React.Fragment>
    );

}

export default Column;