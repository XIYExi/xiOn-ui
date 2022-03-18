import React, { memo, useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import Radio from "./radio";
import { useIsValidChildren } from "../../hooks/useIsValidChildren";

interface IRadioGroupProps {

    /** 用于设置当前选中的值 */
    value?: any;

    /** 点击会回调，包裹Radio时候生效 */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    className?: string;

    style?: React.CSSProperties;
}

const RadioGroup: React.FC<IRadioGroupProps> = memo(({ value, onChange, children, className, style }) => {

    const classes = classnames('xiOn-radio-group', className)

    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }, [onChange])

    const { isValidChildren } = useIsValidChildren(children, Radio)

    return isValidChildren ? (
        <div className={classes} style={style}>
            {React.Children.map(children, _ => {
                const childProps = {
                    ...(_ as any).props,
                    name: "group",
                    defaultValue: value,
                    onChange: handleOnChange
                }
                return React.cloneElement(_ as any, childProps)
            })}
        </div>
    ) : null
})

export default RadioGroup