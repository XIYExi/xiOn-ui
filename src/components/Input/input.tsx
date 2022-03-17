import React, {InputHTMLAttributes, ReactElement, ReactNode, useCallback, useRef, useState} from "react";
import classNames from 'classnames';
import Icon from "../Icon/icon";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export type InputSize = 'lg'|'md'|'sm';

export type InputType = 'textarea'|'password'|'text';

export interface BaseInputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'|'type'|'onChange'>{

    width?:string;

    className?:string;

    /** 是否可以删除输入*/
    clearable?:boolean;

    /** 是否可交互*/
    disabled?:boolean;

    size?:InputSize;

    icon?:IconProp;

    placeholder?:string;

    /** 前缀 */
    addonBefore?:string|ReactNode;

    /** 后缀 */
    addonAfter?:string|ReactNode;

    /** 是否有边框 */
    bordered?:boolean;

    type?: InputType;

    style?:React.CSSProperties;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    onPressEnter?: (e: React.KeyboardEvent) => void;
}

export interface BaseInputState{
    value:any;
    focused:boolean;
    prevValue:any;
}

const Input:React.FC<BaseInputProps> = (props)=>{
    const {
        width,
        className,
        disabled,
        clearable,
        type,
        size,
        addonBefore,
        addonAfter,
        icon,
        bordered,
        style,
        onPressEnter,
        onChange,
        placeholder,
        ...restProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const classes = classNames('xiOn-input-wrapper',className,{
        "disabled": disabled,
        "clearable": clearable,
        'is_bordered': !bordered,
        [`input-${size}`]:size,
        'has-before-addon':addonBefore,
        'has-after-addon':addonAfter,
    });

    const [value,setValue] = useState('');

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

    }, [onChange]);

    const clearValue = useCallback(() => {
        (inputRef.current as HTMLInputElement).value = "";
    }, [inputRef]);

    const handleOnKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onPressEnter && onPressEnter(e)
        }
    }, [onPressEnter])

    return(
        <>
            <div className={classes} style={style}>
                {
                    /** 添加前缀 */
                    addonBefore && <span className='before-addon'>{addonBefore}</span>
                }
                <span className='xiOn-input-container' style={{width:width}}>
                    {
                        type === 'textarea'?(
                            <textarea placeholder='textarea'
                                      className='xiOn-textarea'
                                      {...restProps}
                            />
                        ):(
                            <input className='xiOn-input'
                                   type={type}
                                   placeholder={placeholder}
                                   disabled={disabled}
                                   onChange={handleOnChange}
                                   ref={inputRef}
                                   onKeyPress={handleOnKeyPress}
                                   {...restProps}
                            />
                        )
                    }
                    {
                        /** 点击关闭Icon closeable */
                        clearable && type!=='textarea' &&
                        <span className='xiOn-input-close'
                              onClick={clearValue}
                        ><Icon icon={'close'}
                               title={`title-${icon}`}
                        /></span>
                    }
                </span>
                {
                    addonAfter &&
                        <span className="after-addon"
                        >{addonAfter}</span>
                }
            </div>
        </>
    )
}

Input.defaultProps={
    disabled:false,
    clearable:false,
    bordered:true,
    type:'text',
    size:'md',
    width:'20vw'
}

export default Input;
