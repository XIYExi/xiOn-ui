import React, {FC} from "react";
import classnames from 'classnames';
import {CommonInterface} from "../type";
import {
    GridOnlyProp,
    SemanticWIDTHS,
    TFloated,
    TTextAlign,
    TVertical
} from "./type";
import {
    handleMultipleProp,
    handleTextAlignProp,
    handleVerticalAlignProp,
    handleWidthProp
} from "../use";


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
        handleMultipleProp(only,'only'),
        handleWidthProp(computer, 'wide computer'),
        handleWidthProp(largeScreen, 'wide large screen'),
        handleWidthProp(mobile, 'wide mobile'),
        handleWidthProp(tablet, 'wide tablet'),
        handleWidthProp(widescreen, 'wide widescreen'),
        handleWidthProp(width, 'wide'),
        handleTextAlignProp(textAlign),
        handleVerticalAlignProp(verticalAlign),
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