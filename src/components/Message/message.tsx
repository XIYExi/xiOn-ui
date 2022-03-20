import React, {useEffect, useState} from 'react';
import classnames from "classnames"
import {
    AiOutlineClose,
    AiOutlineCloseCircle,
    AiOutlineExclamationCircle,
    AiOutlineSmile,
    AiOutlineWarning
} from "react-icons/ai";
import ReactDOM from "react-dom";
import {judgeDOMExitAndCreateDOM} from "../utils/judgeDOMExitAndCreateDOM";

export type MessageType = 'info' | 'success' | 'error' | 'warning';

export interface MessageProps{
    content?:string | React.ReactNode;
    type?: MessageType;
    showIcon?: boolean;
    duration?: number;
    onClose?: ()=>any;
    icon?: React.ReactNode;

    className?:string;
    style?:React.CSSProperties;
}

export type MessageOptionsType = {
    icon?: string
    showIcon?: boolean
    onClose?: () => any
    duration?: number
}

export type ModeType = {
    info: Function;
    success: Function;
    error: Function;
    warning: Function;
}

const Message:React.FC<MessageProps> & ModeType = (props) => {

    const {
        content,
        onClose,
        icon,
        type,
        duration,
        showIcon,
        className,
        style
    } = props;

    const [isShowMessage, setMessage] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setMessage(false)
        }, duration)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const hiddenDiv = document.querySelector(".hiddenMessage");
            hiddenDiv?.parentElement?.remove();
        }, 200)
    }, [isShowMessage])


    const handleClose = () => {
        setMessage(false);
        onClose && onClose();
    }

    const classes = classnames("lole-message", className, {
        'hiddenMessage': !isShowMessage
    })

    const renderIcon =()=>{
        const {type} = props;
        if (type==='warning')
            return <AiOutlineWarning fill="#e69b2b"/>

        if (type === 'success')
            return <AiOutlineSmile fill='#67c23a'/>

        if(type === 'error')
            return <AiOutlineCloseCircle fill='#f56c6c'/>

        if (type === 'info')
            return <AiOutlineExclamationCircle fill="rgb(249, 204, 226)"/>
    }

    return(
        <>
            <div className={classes} style={style}>
                <div className="toast_main">
                    <div className="main_left">
                        {(icon!=null && showIcon) ?  <div className="icon">{icon}</div> :(
                            <div className="icon">
                                {renderIcon()}
                            </div>
                        )}
                        <div className="content">{content}</div>
                    </div>
                    <div className="main_right">
                        {onClose && (
                            <div className="close" onClick={handleClose}>
                                <AiOutlineClose/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

Message.defaultProps={
    duration:2000,
    showIcon:true,
}

const isMessageWrapperExist = () => {
    // 判断是否有节点,没有则创建返回
    const messageWrapper = judgeDOMExitAndCreateDOM("lole-message-wrapper")
    const messageInner = document.createElement("div");
    messageWrapper.append(messageInner);
}

const renderDom = (content: string, options: MessageOptionsType, type: MessageType) => {
    ReactDOM.render(<Message
        {...options}
        content={content}
        type={type}
    />, document.querySelector("#lole-message-wrapper>div:last-child"))
}

Message.info = (content: string, options: MessageOptionsType) => {
    isMessageWrapperExist()
    renderDom(content, options, "info")
}
Message.success = (content: string, options: MessageOptionsType) => {
    isMessageWrapperExist();
    renderDom(content, options, "success")
}
Message.error = (content: string, options: MessageOptionsType) => {
    isMessageWrapperExist()
    renderDom(content, options, "error")
}
Message.warning = (content: string, options: MessageOptionsType) => {
    isMessageWrapperExist()
    renderDom(content, options, "warning")
}

export default Message;

