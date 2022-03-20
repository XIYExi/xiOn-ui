import React, {useEffect, useState} from "react";
import classnames from "classnames";
import {
    AiOutlineApi,
    AiOutlineClose,
    AiOutlineCloseCircle,
    AiOutlineExclamationCircle,
    AiOutlineSmile,
    AiOutlineWarning
} from "react-icons/ai";
import {judgeDOMExitAndCreateDOM} from "../utils/judgeDOMExitAndCreateDOM";
import ReactDOM from "react-dom";

type notificationType = "info" | "success" | "error" | "warning" | "open"
type notificationPlacement = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

export interface NoticeProps{
    /** 通知提醒标题，必选 */
    message: string;

    /** 通知提醒内容，必选 */
    description: string;

    /** 默认4秒后自动关闭，配置为null则不自动关闭 */
    duration?: number;

    type?: notificationType;

    /** 自定义图标 */
    icon?: React.ReactNode;

    /** 弹出位置，可选 topLeft topRight bottomLeft bottomRight */
    placement?: notificationPlacement;

    /** 当通知关闭时触发 */
    onClose?: () => any

    className?: string;

    style?: React.CSSProperties;
}

export type staticMethodsType = {
    open: Function;
    info: Function;
    success: Function;
    error: Function;
    warning: Function;
}

const Notice: React.FC<NoticeProps> & staticMethodsType = (props) => {

    const {
        message,
        description,
        duration,
        type,
        icon,
        placement,
        onClose,
        className,
        style
    } = props;

    const [isShowNotification, setNotification] = useState<boolean>(true)

    const classes = classnames("lole-notification", className, {
        hiddenNotification: !isShowNotification,
    })

    useEffect(() => {
        if (duration) {
            if (duration === 0) return;
            setTimeout(() => {
                setNotification(false)
            }, duration)
        }
    }, [duration])

    useEffect(() => {
        setTimeout(() => {
            const hiddenDiv = document.querySelector(".hiddenNotification");
            hiddenDiv?.parentElement?.remove();
        }, 250)
    }, [isShowNotification])


    useEffect(() => {
        const notificationWrapper = document.querySelector("#le-notification-wrapper");
        removeAllClasses(notificationWrapper);
        notificationWrapper?.classList.add(`lole-notification-wrapper-${placement}`)
    }, [placement])

    const removeAllClasses = (notificationWrapper: Element | null) => {
        if (document.querySelector(".le-notification-wrapper-topLeft")) {
            notificationWrapper?.classList.remove("lole-notification-wrapper-topLeft");
        }
        if (document.querySelector(".le-notification-wrapper-topRight")) {
            notificationWrapper?.classList.remove("lole-notification-wrapper-topRight");
        }
        if (document.querySelector(".le-notification-wrapper-bottomLeft")) {
            notificationWrapper?.classList.remove("lole-notification-wrapper-bottomLeft");
        }
        if (document.querySelector(".le-notification-wrapper-bottomRight")) {
            notificationWrapper?.classList.remove("lole-notification-wrapper-bottomRight");
        }
    }

    const handleClose = () => {
        setNotification(false)
        onClose && onClose();
    }

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

        if (type === 'open')
            return <AiOutlineApi fill='#409ef'/>
    }

    return(
        <>
            <div className={classes} style={style}>
                <div className="toast_main">
                    {icon != null ?  <div className="icon">{icon}</div> :(
                        <div className="main_left">
                            {renderIcon()}
                        </div>
                    )}
                    <div className="main_right">
                        <div className="main_header">
                            <div className="main_header_title">{message}</div>
                            <div className="main_header_icon" onClick={handleClose}><AiOutlineClose/></div>
                        </div>
                        <div className="main_content">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Notice.defaultProps={
    duration: 4000,
    type: "open",
    placement: 'topRight',
}

const isNotificationExist = (placement: notificationPlacement | undefined) => {
    // 判断是否有节点,没有则创建返回
    const notificationWrapper = judgeDOMExitAndCreateDOM(`lole-notification-wrapper-${placement ? placement : "topRight"}`)
    const messageInner = document.createElement("div");
    notificationWrapper.append(messageInner);
}

const renderDom = (options: NoticeProps, type: notificationType) => {
    ReactDOM.render(<Notice
        {...options}
        type={type}
    />, document.querySelector(`#lole-notification-wrapper-${options.placement ? options.placement : "topRight"}>div:last-child`))
}

Notice.open = (options: NoticeProps) => {
    isNotificationExist(options.placement)
    renderDom(options, "open")
}
Notice.success = (options: NoticeProps) => {
    isNotificationExist(options.placement)
    renderDom(options, "success")
}
Notice.error = (options: NoticeProps) => {
    isNotificationExist(options.placement)
    renderDom(options, "error")
}
Notice.warning = (options: NoticeProps) => {
    isNotificationExist(options.placement)
    renderDom(options, "warning")
}
Notice.info = (options: NoticeProps) => {
    isNotificationExist(options.placement)
    renderDom(options, "info")
}

export default Notice;