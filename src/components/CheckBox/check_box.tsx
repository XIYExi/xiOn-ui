import React, {useCallback, useContext, useEffect, useRef, useState} from "react";
import classNames from 'classnames';
import {checkBoxGroupContext} from "./check_box_group";

interface CheckBoxProps{
    /** checkbox后跟随的文本 */
    label: string;

    /** 是否禁用 */
    disabled?: boolean;

    /** 设置 indeterminate 状态，只负责样式控制 */
    indeterminate?: boolean;

    /** 默认选中状态 */
    defaultChecked?: boolean;

    /** 变化时回调函数, 当被CheckBoxGroup包裹时此onChange失效 */
    onChange?: (label: string, checked: boolean) => void;

    className?: string;

    style?: React.CSSProperties;
}


const CheckBox:React.FC<CheckBoxProps> = (props) => {

    const {
        label,
        disabled,
        indeterminate,
        defaultChecked,
        onChange,
        className,
        style,
        ...restProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null)
    const groupDefaultValue = useContext(checkBoxGroupContext)
    const [isChecked, setIsChecked] = useState(defaultChecked)

    const classes = classNames('xiOn-checkBox',className,{
        'xiOn-checkBox-disabled':disabled,
    })

    const handleChange = useCallback(()=>{
        const checked = (inputRef.current as HTMLInputElement).checked;
        setIsChecked(checked);
        onChange && onChange(label, checked)
    },[label, onChange])

    useEffect(() => {
        if (groupDefaultValue.length !== 0) {
            if (groupDefaultValue.includes(label)) {
                setIsChecked(true)
            }
        } else {
            setIsChecked(false)
        }
    }, [groupDefaultValue, label, setIsChecked])

    return(
        <>
            <div className={classes} style={style} {...restProps}>
                <input className={`xiOn-checkBox-input`} type='checkbox' defaultChecked={isChecked} id={label} onChange={handleChange} ref={inputRef} />
                <label htmlFor={label}>{label}</label>{/*通过htmlFor绑定input，实现点击label可以操作checkbox*/}
            </div>
        </>
    )
}

CheckBox.defaultProps={
    disabled:false,
    defaultChecked:false,
    indeterminate:false,
}


export default CheckBox;