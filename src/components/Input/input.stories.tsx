import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Input from "./input";
import Icon from "../Icon/icon";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
/*library.add(fas);*/

const InputBasic=()=>{
    return(
        <>
            <Input placeholder='Basic Input'/>
        </>
    )
}

const InputSize=()=>{
    return(
        <>
            <Input size='sm' placeholder='Small Input'/>
            <Input size='md' placeholder='Middle Input'/>
            <Input size='lg' placeholder='Large Input'/>
        </>
    )
}

const InputDisabled=()=>{
    return(
        <>
            <Input disabled placeholder='Disabled Input'/>
        </>
    )
}

const InputPrepend=()=>{
    return(
        <>
            <Input addonBefore='http://' placeholder='AddonBefore Input'/>
            <Input addonBefore={<Icon icon='search'/>} placeholder='AddonBefore Icon Input'/>
        </>
    )
}

const InputAppend=()=>{
    return(
        <>
            <div>
                <Input addonAfter='.com' placeholder='AddonAfter Input'/>
                <Input addonAfter={<Icon icon='search'/>} placeholder='AddonAfter Icon Input'/>
            </div>
        </>
    )
}

const InputCombine=()=>{
    return(
        <>
            <Input size='lg' disabled addonAfter={<Icon icon={'close'}/>} addonBefore={<Icon icon={'search'}/>}/>
            <Input size='md' disabled addonAfter={<Icon icon={'close'}/>} addonBefore={<Icon icon={'search'}/>}/>
            <Input size='sm' disabled addonAfter={<Icon icon={'close'}/>} addonBefore={<Icon icon={'search'}/>}/>
            <Input size='lg' clearable disabled addonAfter={'http://'} addonBefore={'.com'}/>
            <Input size='md' clearable disabled addonAfter={'http://'} addonBefore={'.com'}/>
            <Input size='sm' clearable disabled addonAfter={'2'} addonBefore={'1'}/>
        </>
    )
}

const InputBordered=()=>{
    return(
        <>
            <Input bordered={false} placeholder='Please enter...'/>
        </>
    )
}

const InputCleared=()=>{
    return(
        <>
            <Input clearable placeholder='Please Enter...'/>
        </>
    )
}

const InputTextArea=()=>{
    return(
        <>
            <Input width='40vw' type='textarea' placeholder='input默认长度为20vw，文本域请按照实际需求调整width属性'/>
        </>
    )
}

const InputPassword=()=>{
    return(
        <>
            <Input type='password'/>
        </>
    )
}

storiesOf('Input Components',module)
    .add('基本使用',InputBasic)
    .add('三种大小',InputSize)
    .add('不可用',InputDisabled)
    .add('带前缀的输入框',InputPrepend)
    .add('带后缀的输入框',InputAppend)
    .add('组合',InputCombine)
    .add('无边框',InputBordered)
    .add('带移除图标',InputCleared)
    .add('密码',InputPassword)
    .add('文字域',InputTextArea)



