import React, {memo, useCallback} from "react";
import classNames from 'classnames';

export interface RadioBaseProps{

    className?:string;

    style?:React.CSSProperties;

    /** Radio后跟随的文本 */
    label: string;

    /** 根据 value 进行比较，判断是否选中 */
    value?: any;

    /** 默认value值 */
    defaultValue?: any;

    name?: string;

    /** 是否禁用 */
    disabled?: boolean;

    /** 默认选中 */
    defaultChecked?: boolean;

    /** 改变时回调，被RadioGroup包裹时失效 */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio:React.FC<RadioBaseProps> = memo(({ label,
                                                 defaultChecked,
                                                 disabled,
                                                 name,
                                                 onChange,
                                                 value,
                                                 defaultValue,
                                                 className,
                                                 style })=>{

    const classes = classNames('xiOn-radio',className,{
        'xiOn-radio-disabled': disabled
    })

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }, [onChange])

    return(
        <>
            <div className={classes} style={style}>
                <input type="radio"
                       id={label}
                       defaultChecked={name === "group" ? defaultValue === value : defaultChecked}
                       onChange={handleOnChange}
                       value={value}
                       name={name}
                />
                <label htmlFor={label}>{label}</label>
            </div>
        </>
    )
})

Radio.defaultProps={
    defaultChecked:false,
    disabled:false,
}

export default Radio;
