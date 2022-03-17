import React, {ReactNode} from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";
import {replaceElement} from "../utils/reactNode";
import Animator from "../Animator/animator";

export type AlertType = 'success'|'info'|'warning'|'error';

export type AlertBorder = 'default'|'circle'|'round';

export interface BaseAlertProps{
    className?:string;

    type?:AlertType;

    bordered:AlertBorder;

    /** 警告提示内容 */
    message?:ReactNode;

    /** 自定义操作项 */
    action?:ReactNode;

    /** 默认不显示关闭按钮 */
    closeable?:boolean;

    /** 自定义关闭Icon */
    closeIcon?:ReactNode;

    /** 自定义关闭按钮 */
    closeText?:ReactNode;

    /** 警告提示的辅助性文字介绍 */
    description?:ReactNode;

    /** 自定义图标 */
    icon?:ReactNode;

    showIcon?: boolean;

    width?:string;
}

type IAlertProps = BaseAlertProps & React.BaseHTMLAttributes<HTMLElement>;
//设置为可选
export type AlertProps = Partial<IAlertProps>;

const Alert:React.FC<AlertProps> = (props) => {

    const {
        className,
        message,
        description,
        action,
        type,
        closeable,
        closeText,
        closeIcon,
        showIcon,
        icon,
        width,
        bordered,
        ...restProps
    } = props;

    const [closed, setClosed] = React.useState(false);
    const isClosable = closeText ? true : closeable;

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setClosed(true);
        //props.onClose?.(e);
    };

    const classes = classNames('alert',className,{
        [`alert-${type}`]: type,
        [`alert-${bordered}`]:bordered,
    })

    /** 由Animator组件控制 */
    const showStyle = () => {
        return closed?{display:'none'}:{};
    }

    const renderIconNode = () => {
        const {icon} = props;

        /** 判断iconType用于渲染实心还是空心icon */
        if (icon)
            return icon;
        else
            return <span className={`alert-icon`} ><Icon icon='info'/></span>;

        /*if (icon){
            return replaceElement(icon, <span className={`alert-icon`} ><Icon icon='info'/></span>,()=>({
                className: classNames(`alert-icon`,{}),
            }));
        }*/
    }

    const renderCloseIcon = () => {
        return isClosable ? (
            <button
                type='button'
                onClick={handleClose}
                className='alert-close-icon'
            >
                {closeText ? <span className='alert-close-text'>{closeText}</span> : closeIcon}
            </button>
        ) : null;
    }

    return(
        <>
            <div style={{width:width}}>
                <Animator
                    in={!closed}
                    timeout={300}
                    animation='zoom-in-left'
                >
                    <div className={classes}
                         {...restProps}
                    >
                        {
                            showIcon?renderIconNode():null
                        }
                        <div className='alert-container'>
                            {
                                message?<div className='alert-message'>{message}</div>:null
                            }
                            {
                                description?<div className='alert-description'>{description}</div>:null
                            }
                            {
                                action?<div className='alert-action'>{action}</div>:null
                            }
                        </div>

                        {renderCloseIcon()}
                    </div>
                </Animator>
            </div>
        </>
    )

}

Alert.defaultProps={
    type:'info',
    message:'Please Input Message.',
    closeable:false,
    width:'50%',
    bordered:'default',
    showIcon:false,
    closeIcon:<Icon icon='close'/>,
}

export default Alert;

