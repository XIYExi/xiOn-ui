import React, {CSSProperties, FC} from "react";
import classnames from 'classnames';
import {judgeChildIsNull} from "../utils/judgeChildIsNull";
import HeaderContainer from "./title_container";

export interface BaseHeaderProps{
    block?: boolean;
    className?: string
    color?: colorType;
    disabled?: boolean;
    dividing?: boolean;
    floated?:HeaderFloatedType;
    icon?: React.ReactNode;
    image?: React.ReactNode;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
    sub?: boolean;
    textAlign?:HeaderTextType;
    style?: CSSProperties;
    container?:React.ReactNode;
    subheader?:React.ReactNode;
    [key:string]:any;
}

type colorType = 'primary'| 'orange'| 'yellow'| 'indigo'| 'green'| 'teal'| 'red'| 'purple'|'pink'| 'cyan'| 'gray';

type HeaderFloatedType = 'left' | 'right';

type HeaderTextType = 'left' | 'center' | 'right';

const Title:FC<BaseHeaderProps> = (props) => {

    const {
        block,
        children,
        className,
        color,
        disabled,
        dividing,
        floated,
        icon,
        image,
        size,
        sub,
        style,
        textAlign,
        container,
        subheader,
        ...restProps
    } = props

    const classes = classnames('lole-header',className,{
        [`${color}`]: color,
        [`${size}`]: size,
        'block': block,
        'disabled': disabled,
        'dividing': dividing,
        [`${floated} floated`]: floated,
        'icon':icon===true,
        'image':image===true,
        'sub': sub,
        [`${textAlign} aligned`]:textAlign,
        'header': true
    })

    if (!judgeChildIsNull(children))
        return (
            <div className={classes} style={style} {...restProps}>
                {
                    children
                }
            </div>
        )

    if (icon || image)
        return (
            <div className={classes} style={style} {...restProps}>
                {icon || image}
                {
                    (container || subheader) && (
                        <HeaderContainer>
                            {container}
                            {subheader}
                        </HeaderContainer>
                    )
                }
            </div>
        )

    return(
        <div className={classes} style={style} {...restProps}>
            {container}
            {subheader}
        </div>
    )

}

Title.defaultProps = {
    block: false,
    disabled: false,
    dividing: false,
    sub: false,
}

export default Title;
