import React, {memo, useCallback, useRef} from "react";
import classnames from 'classnames';
import CheckBox from "./check_box";
import {useIsValidChildren} from "../../hooks/useIsValidChildren";

interface ICCheckBoxGroupProps {
    /** 默认选中的选项 */
    defaultValue?: string[];

    /** 变化时回调函数，包裹CheckBox时生效 */
    onChange?: (checked: string[]) => void;

    className?: string;

    style?: React.CSSProperties;
}

export const checkBoxGroupContext = React.createContext<string[]>([]);


const CheckBoxGroup:React.FC<ICCheckBoxGroupProps> = memo(({defaultValue = [], onChange, children, className, style})=>{

    const checkedValueRef = useRef(defaultValue)

    const { isValidChildren } = useIsValidChildren(children, CheckBox)

    const classes = classnames("xiOn-checkBox-group", className)

    const handleChange = useCallback((label: string, checked: boolean) => {
        if (checked) {
            if (checkedValueRef.current.indexOf(label) === -1) {
                checkedValueRef.current.push(label);
            }
        } else {
            if (checkedValueRef.current.indexOf(label) !== -1) {
                checkedValueRef.current.splice(
                    checkedValueRef.current.findIndex((_) => _ === label), 1
                );
            }
        }
        onChange && onChange(checkedValueRef.current)
    }, [checkedValueRef.current])

    return isValidChildren ? (
        <checkBoxGroupContext.Provider value={defaultValue}>
            <div className={classes} style={style}>
                {React.Children.map(children, _ => {
                    const childProps = {
                        ...(_ as any).props,
                        name: "group",
                        defaultChecked: defaultValue?.includes((_ as any).props.label),
                        onChange: handleChange
                    }
                    return React.cloneElement(_ as any, childProps)
                })}
            </div>
        </checkBoxGroupContext.Provider>
    ) : null
})

export default CheckBoxGroup;


