import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Message from "./message";
import Button from "../Button";
import {AiOutlineStop} from "react-icons/ai";

const MessageBase = () => {

    const handleMessage = () => {
        Message.info('这是一条Info');
    }

    return(
        <>
            <Button onClick={handleMessage} >Info</Button>
        </>
    )
}

const  MessageTheme = () => {

    return(
        <>
            <Button btnType='primary' onClick={()=>Message.info('Info')} >Info</Button>
            <Button btnType='danger' onClick={()=>Message.error('Error')} >Error</Button>
            <Button btnType='dashed' onClick={()=>Message.warning('Warning')} >Warning</Button>
            <Button btnType='default' onClick={()=>Message.success("Success")}>Success</Button>
        </>
    )
}

const MessageDuration = () => {

    const handleMessage = () => {
        Message.info('修改时间为4s后关闭',{
            duration:4000
        })
    }

    return (
        <>
            <Button btnType='primary' onClick={handleMessage}>Change Duration</Button>
        </>
    )
}

const MessageClose=()=>{

    const handleMessage = () => {
        Message.info('点击按钮即可关闭',{
            onClose: ()=>console.log('close!!!')
        })
    }

    return(
        <>
            <Button btnType='primary' onClick={handleMessage}>Change Duration</Button>
        </>
    )
}

const MessageDIYIcon = () => {
    const handleMessage = () => {
        Message.info('自定义图标',{
            icon: <AiOutlineStop color='pink'/>
        })
    }

    return(
        <>
            <Button btnType='primary' onClick={handleMessage}>Change Duration</Button>
        </>
    )
}

storiesOf('Message Component',module)
    .add('基本使用',MessageBase)
    .add('主题',MessageTheme)
    .add('修改延时',MessageDuration)
    .add('可关闭',MessageClose)
    .add('自定义Icon',MessageDIYIcon)