import React, {useEffect, useState} from "react";
import classNames from 'classnames';
import Input from "../Input/input";

export interface BaseSwitchProps{

    type?: 'toggle' | 'slider' | 'text';

    /** 默认选择 */
    defaultChecked?: boolean;

    /** 是否禁用 */
    disabled?: boolean;

    /** 异步加载 */
    loading?: boolean;

    /** Switch大小 */
    size?: "small";

    /** 改变时的回调 */
    onChange?: (checked: boolean, e: React.MouseEvent) => void;

    className?: string

    style?: React.CSSProperties
}

const Switch:React.FC<BaseSwitchProps> = (props) => {

    const {
        type,
        disabled,
        loading,
        size,
        defaultChecked,
        onChange,
        style,
        className ,
        ...restProps
    } = props;

    const [value, setValue] = useState(false);

    useEffect(() => {
        const checked = defaultChecked || false
        setValue(checked)
    }, [defaultChecked])

    const handleClick: React.MouseEventHandler = e => {
        if (disabled || loading) return;
        setValue(!value);
        onChange && onChange(!value, e)
    }


    const classes = classNames('xiOn-switch' ,className, {

        "toggle": type==='toggle',
        "text": type==='text',
        "slider": type==='slider',
        [`xiOn-switch-${size}`]: size,
        "xiOn-checked": value,
        "xiOn-disabled": disabled,
        "xiOn-loading": loading,
    })

    return(
        <>
            <div className={classes} style={style} {...restProps}>
                <input className='xiOn-switch-input' type='checkbox' defaultChecked={defaultChecked} id='1' onClick={handleClick}/>
                <label htmlFor='1'/>
            </div>
        </>
    )
}

Switch.defaultProps={
    disabled: false,
    loading: false,
    defaultChecked: false,
    type: "toggle",
}

export default Switch;