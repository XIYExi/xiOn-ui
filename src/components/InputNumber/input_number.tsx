import React, {ChangeEvent, ReactNode, useRef, useState} from "react";
import classNames from 'classnames';
import Icon from "../Icon/icon";

export type InputNumberHeight = 'small'|'normal'|'large';

export type InputNumberStatus = 'primary' | 'warning' | 'error' | 'info' | 'default';

export interface BaseInputNumberProps {

    className?: string;

    /** 输入框高度 */
    height?:InputNumberHeight;

    /** 前缀 */
    addBefore?:ReactNode | string;

    /** 后缀 */
    addAfter?:ReactNode | string;

    value?:string;

    /** 自定义主题 */
    status?:InputNumberStatus;

    /** 默认值 */
    defaultValue?: number;

    /** 是否禁用 */
    disabled?:boolean;

    /** 最大值 */
    max?:number;

    /** 最小值 */
    min?:number;

    /** 步长 */
    step?:number;

    /** 是否显示边框 */
    bordered?:boolean;

    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void;

    onClickSub?:(e:React.MouseEvent<HTMLButtonElement>,count?:number) => void;

    onClickAdd?:(e:React.MouseEvent<HTMLButtonElement>,count?:number) => void;
}

const InputNumber:React.FC<BaseInputNumberProps> = (props) => {

    const {
        value,
        className,
        disabled,
        defaultValue,
        onChange,
        min = 0,
        max = 100,
        step = 1,
        bordered,
        addAfter,
        addBefore,
        height,
        status,
        onClickAdd,
        onClickSub,
        ...restProps
    } = props;

    const inputNumberRef = useRef<HTMLInputElement>(null);
    //const tp = defaultValue as number;

    const tp = () => {
        let temp = defaultValue as number;
        if (temp>max)
            temp = max;
        else if (temp<min)
            temp = min;
        return temp;
    }

    const [count, setCount] = useState(tp);
    const [preCount, setPreCount] = useState(min);

    const add = (e:React.MouseEvent<HTMLButtonElement>) =>{
        setPreCount(count);
        const at = count + step;

        const num = at > max ? max : at;
        setCount(num);

        if (onClickAdd){
            onClickAdd(e,num);
        }
    }

    const sub = (e:React.MouseEvent<HTMLButtonElement>) => {
        setPreCount(count);
        const st = count - step;

        const num = st < min ? min : st;
        setCount(num);

        if (onClickSub){
            onClickSub(e,num);
        }

    }

    const changeHandle = (e:ChangeEvent<HTMLInputElement>) => {

        setPreCount(count);
        let ct = parseInt(e.target.value);

        if (isNaN(ct)){
            ct = preCount;
        }

        if (ct<min)
            setCount(min);
        else if (ct>max)
            setCount(max);
        else
            setCount(ct);

        if (onChange) {
            onChange(e)
        }
    }

    const classes = classNames('input-number',className,{
        'is-disabled': disabled,
        'is-bordered': !bordered,
        [`input-${height}`]: height,
        [`input-theme-${status}`]: status,
    })

    return(
        <>
            <div className={classes}>

                <button className='input-number-down'
                        disabled={disabled}
                        onClick={sub}
                        value={count}
                >-</button>

                <div className='inner-wrapper'>
                    {
                        <div className='input-number-addBefore'>{addBefore}</div>

                    }
                    <input placeholder={defaultValue as (string|undefined)}
                           disabled={disabled}
                           className='input-number-input-wrap'
                           value={count}
                           onChange={changeHandle}
                           ref={inputNumberRef}
                    />
                    {
                        <div className='input-number-addAfter'>{addAfter}</div>
                    }
                </div>
                <button className='input-number-up'
                        disabled={disabled}
                        onClick={add}
                        value={count}
                >+</button>
            </div>
        </>
    )
}

InputNumber.defaultProps = {
    defaultValue:0,
    disabled:false,
    bordered:true,
    height:'normal',
    status:'default',
};

export default InputNumber;

