import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Input from "./input";
import Icon from "../Icon/icon";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas);

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
            <Input width='40vw' type='textarea' placeholder='input???????????????20vw???????????????????????????????????????width??????'/>
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
    .add('????????????',InputBasic)
    .add('????????????',InputSize)
    .add('?????????',InputDisabled)
    .add('?????????????????????',InputPrepend)
    .add('?????????????????????',InputAppend)
    .add('??????',InputCombine)
    .add('?????????',InputBordered)
    .add('???????????????',InputCleared)
    .add('??????',InputPassword)
    .add('?????????',InputTextArea)



