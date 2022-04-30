import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Icon from "../Icon/icon";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import InputNumber from "./input_number";
import Input from "../Input/input";
/*library.add(fas);*/

const InputNumberBase=()=>{
    return(
        <>
            <InputNumber
                min={2}
                defaultValue={4}
                max={10}
            />
        </>
    )
}

const InputNumberThreeSize=()=>{
    return(
        <>
            <InputNumber min={2} max={10} height='small'/>
            <InputNumber min={2} max={10} height='normal'/>
            <InputNumber min={2} max={10} height='large'/>
        </>
    )
}

const InputNumberProps=()=>{
    return(
        <>
            <InputNumber min={2} max={10} addBefore={<Icon icon={'search'} theme='primary'/> }/>
            <InputNumber min={2} max={10} addAfter={'￥'}/>
            <InputNumber min={2} max={10} addBefore={'请录入'} addAfter={'$'}/>
        </>
    )
}

const InputNumberDisabled=()=>{
    return(
        <>
            <InputNumber disabled
                         min={2}
                         max={10}
            />
        </>
    )
}

const InputNumberTheme=()=>{
    return(
        <>
            <InputNumber min={2} max={10} status='primary'/>
            <InputNumber min={2} max={10} status='error'/>
            <InputNumber min={2} max={10} status='warning'/>
            <InputNumber min={2} max={10} status='info'/>
        </>
    )
}

storiesOf('InputNumber Components',module)
    .add('基本使用',InputNumberBase)
    .add('三种大小',InputNumberThreeSize)
    .add('多种组合',InputNumberProps)
    .add('不可用',InputNumberDisabled)
    .add('自定主题',InputNumberTheme)
    /*.add('精度',)*/


