import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import CheckBox from "./check_box";
import CheckBoxGroup from "./check_box_group";

const CheckBoxBase = () => {
    return(
        <>
            <CheckBox label="备选项A" onChange={(label, checked)=>console.log(`${label}当前的状态是---${checked}`)}/>
            <CheckBox label="备选项B" defaultChecked onChange={(label, checked)=>console.log(`${label}当前的状态是---${checked}`)}/>
        </>
    )
}

const CheckBoxDisabled = () => {
    return(
        <>
            <CheckBox label="备选项A" disabled/>
            <CheckBox label="备选项B" disabled defaultChecked/>
        </>
    )
}

const ChechBoxGroup = () => {
    return(
        <>
            <CheckBoxGroup defaultValue={["备选项-1", "备选项-2"]} onChange={(value)=>console.log('当前选中',value)}>
                {
                    new Array(5).fill(null).map((_,index)=>{
                        const key = index+1;
                        return <CheckBox key={key}
                                         label={`备选项-${key}`}
                        />
                    })
                }
            </CheckBoxGroup>
        </>
    )
}

storiesOf('CheckBox Component',module)
    .add('基本使用',CheckBoxBase)
    .add('禁用',CheckBoxDisabled)
    .add('选项组',ChechBoxGroup)
