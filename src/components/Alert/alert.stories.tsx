import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Alert from "./alert";
import Icon from "../Icon/icon";
import {TextLoop} from "react-text-loop-next";
import Marquee from "react-fast-marquee";

const AlertBasic = () => {
    return(
        <Alert message='Please Enter Message.' />
    )
}

const AlertTheme = () => {
    return(
        <>
            <Alert closeable type='info' message='Please Enter Message.' />
            <Alert closeable type='success' message='Please Enter Message.' />
            <Alert closeable type='error' message='Please Enter Message.' />
            <Alert closeable type='warning' message='Please Enter Message.' />
        </>
    )
}

const AlertIcon = () => {
    return(
        <>
            <Alert type='info' showIcon/>
            <Alert type='success' showIcon icon={<Icon icon={'search'}/>}/>
        </>
    )
}

const AlertDescription = () => {
    return(
        <>
            <Alert message='Message' description='You can edit description here.'/>
        </>
    )
}

const AlertAction = () => {
    return(
        <>
            <Alert message='Please Enter Message' action={<Icon icon={'info'}/>}/>
            <Alert message='Please Enter Message' action='Action'/>
        </>
    )
}

const AlertClose = () => {
    return(
        <>
            <Alert message='Please Enter Message.' closeable/>
        </>
    )
}

const AlertCustomizationClose=()=>{
    return(
        <>
            <Alert message='Please Enter Message.' closeable closeText='Close'/>
            <Alert message='Please Enter Message.' closeable closeIcon={<Icon icon={'warning'}/>}/>
        </>
    )
}

const AlertRound = () => {
    return(
        <>
            <Alert bordered='default' message='Please enter Message'/>
            <Alert bordered='circle' message='Please enter Message'/>
            <Alert bordered='round' message='Please enter Message'/>
        </>
    )
}

const AlertWidth = () => {
    return(
        <>
            <Alert type='error' message='Please Enter Message.'/>
            <Alert type='error' message='Please Enter Message.' width='100%'/>
        </>
    )
}

const AlertLoop = () => {
    return(
        <>
            <Alert type='warning' message={
                <TextLoop mask>
                    <div>Notice message one</div>
                    <div>Notice message two</div>
                    <div>Notice message three</div>
                    <div>Notice message four</div>
                </TextLoop>
            }/>

            <Alert type='success' message={
                <Marquee pauseOnHover gradient={false}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            }/>

        </>
    )
}

storiesOf('Alert Component',module)
    .add('基本使用',AlertBasic)
    .add('四种类型',AlertTheme)
    .add('含有辅助性文字介绍',AlertDescription)
    .add('轮播的公告',AlertLoop)
    .add('图标',AlertIcon)
    .add('操作',AlertAction)
    .add('平滑的关闭',AlertClose)
    .add('自定义关闭',AlertCustomizationClose)
    .add('圆角',AlertRound)
    .add('自定义长度',AlertWidth)
