import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Radio from "./radio";
import RadioGroup from "./radio_group";

const RadioBase = () => {
    return(
        <Radio label='Radio-1'/>
    )
}

const RadioGroupBase =() => {
    return(
        <RadioGroup value={1} onChange={(e)=>console.log(e.target.value)}>
            {
                new Array(5).fill(null).map((_,index)=>{
                    const key = index+1;
                    return <Radio key={key} label={`Radio-${key}`} value={key}/>
                })
            }
        </RadioGroup>
    )
}


storiesOf('Radio Component',module)
    .add('基本使用',RadioBase)
    .add('一组单选框',RadioGroupBase)