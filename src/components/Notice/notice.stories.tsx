import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Button from "../Button";
import Notice from "./Notice";
import {AiOutlineCompass} from "react-icons/ai";

const NoticeBase = () => {

    const handleNotice = () => {
        Notice['info']({
            message: 'A Simple Notice Bar',
            description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
        })
    }

    return(
        <>
            <Button onClick={handleNotice} btnType='primary'>Basic notice bar</Button>
        </>
    )
}

const NoticePosition=()=>{

    const handleNotice=(type:number)=>{

        if (type===1)
            Notice['success']({
                message: 'A Simple Notice Bar',
                description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
                placement: 'topLeft'
            })
        if (type===2)
            Notice['success']({
                message: 'A Simple Notice Bar',
                description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
                placement: 'topRight'
            })
        if (type===3)
            Notice['success']({
                message: 'A Simple Notice Bar',
                description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
                placement: 'bottomLeft'
            })
        if (type===4)
            Notice['success']({
                message: 'A Simple Notice Bar',
                description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
                placement: 'bottomRight'
            })
    }


    return(
        <>
            <Button onClick={()=>handleNotice(1)} btnType='primary'>Top-Left</Button>
            <Button onClick={()=>handleNotice(2)} btnType='primary'>Top-Right</Button>
            <Button onClick={()=>handleNotice(3)} btnType='primary'>Bottom-Left</Button>
            <Button onClick={()=>handleNotice(4)} btnType='primary'>Bottom-Right</Button>
        </>
    )
}

const NoticeTheme=()=>{
    const handleNotice=(type:number)=>{

        if (type===1)
            Notice['info']({
                message: 'A Simple Notice Bar',
                description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
            })
        if (type===2)
            Notice['success']({
                message: 'A Simple Notice Bar',
                description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
            })
        if (type===3)
            Notice['warning']({
                message: 'A Simple Notice Bar',
                description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
            })
        if (type===4)
            Notice['error']({
                message: 'A Simple Notice Bar',
                description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
            })
        if (type===5)
            Notice['open']({
                message: 'A Simple Notice Bar',
                description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
            })
    }


    return(
        <>
            <Button onClick={()=>handleNotice(1)} btnType='primary'>Info</Button>
            <Button onClick={()=>handleNotice(2)} btnType='primary'>Success</Button>
            <Button onClick={()=>handleNotice(3)} btnType='primary'>Warning</Button>
            <Button onClick={()=>handleNotice(4)} btnType='primary'>Error</Button>
            <Button onClick={()=>handleNotice(5)} btnType='primary'>Open</Button>
        </>
    )
}

const NoticeDIYIcon=()=>{
    const handleNotice = () => {
        Notice['info']({
            message: 'A Simple Notice Bar',
            description: 'Thank you for using lole-UI, which is a かわいい cherry white quadratic component for quickly building network projects',
            icon: <AiOutlineCompass color='red'/>
        })
    }

    return(
        <>
            <Button onClick={handleNotice} btnType='primary'>DIY Icon</Button>
        </>
    )
}


storiesOf('Notice Component',module)
    .add('基本使用',NoticeBase)
    .add('主题',NoticeTheme)
    .add('位置',NoticePosition)
    .add('自定义图标',NoticeDIYIcon)