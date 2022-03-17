import React from "react";
import classNames from 'classnames';

export type ButtonSize = 'lg'|'md'|'sm';

export type ButtonType='primary'|'default'|'danger'|'link'|'dashed';

export type ButtonShape = 'default'|'circle'|'round';

interface BaseButtonProps{
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;

    block?: boolean;//将按钮宽度调整为其父宽度的选项
    ghost?: boolean;//幽灵属性，使按钮背景透明
    icon?: React.ReactNode;
    shape?: ButtonShape;
}


type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>//原生button和BaseButtonProps的连结类型
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>//原生a标签和BaseButtonProps的连结类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> //使用Partial将两个属性值设置为可选

const Button: React.FC<ButtonProps> = (props) => {

    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        shape,
        block,
        ghost,
        ...restProps
    }=props;

    // btn, btn-lg, btn-primary...
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]: size,
        [`btn-type-${shape}`]: shape,
        'block': block,
        'ghost': ghost,
        'disabled': (btnType==='link') && disabled
    })

    if (btnType==='link' && href){
        return(
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    }
    else{
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }


}

Button.defaultProps = {
    disabled: false,
    size: 'md',
    btnType: 'default',
    block: false,
    ghost: false,
    shape: 'default',
}

export default Button