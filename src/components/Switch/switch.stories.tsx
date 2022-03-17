import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import {Switch} from "./switch";


const BaseSwitch = () => {
    return(
        <>
            <Switch type='toggle' onChange={(e: any)=>console.log(e)} defaultChecked={true} />
        </>
    )
}

const SwitchSlider = () => {
    return(
        <>
            <Switch type='slider'/>
        </>
    )
}

const SwitchText = () => {
    return(
        <>
            <Switch type='text'
                    checkedText='yes'
                    unCheckedText='no'
            />
        </>
    )
}

const SwitchDisabled = () => {
    return(
        <>
            <Switch disabled/>
            <Switch type='slider' disabled/>
            <Switch type='text'
                    checkedText='yes'
                    unCheckedText='no'
                    defaultChecked={true}
                    disabled
            />
        </>
    )
}

storiesOf('Switch Component',module)
    .add('仿生IOS风格',BaseSwitch)
    .add('滑块',SwitchSlider)
    .add('交互文本',SwitchText)
    .add('禁用',SwitchDisabled)