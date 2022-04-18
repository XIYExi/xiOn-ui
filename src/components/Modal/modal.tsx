import React, {FC, ReactNode, useEffect, useRef} from "react";
import classnames from "classnames";
import ReactDOM from "react-dom";
import Button from "../Button";
import Space from "../Space";
import {judgeDOMExitAndCreateDOM} from "../utils/judgeDOMExitAndCreateDOM";
import {AiOutlineClose} from "react-icons/ai";

/**
 * 0.5.82 Modal with bug ===> when user render modal through function, it will hard to destroy.
 * @author:xiye 拟态框在组件标签渲染情况下是正常的，但是使用function渲染会出现无法销毁的情况，这里在cancel中通过操作dom强行销毁。
 * */
interface BaseModalProps{
    visible: boolean;

    title?:string|null;

    mask?:boolean;

    content?:ReactNode | string;

    closeIcon?: ReactNode | null;

    maskCloseable?: boolean;

    okText?: string;

    cancelText?: string;

    footer?: ReactNode[] | null;

    onCancel?: () => any;

    onConfirm?: () => any;

    onCloseIcon?: () => any;

    callType?: 'HTML' | 'METHODS';

    width?: string;

    className?:string;

    style?:React.CSSProperties;

    timing?: boolean;
}

type staticModalMethods = {
    open: Function;
}

const Modal: FC<BaseModalProps> & staticModalMethods = ({
        visible = false,
        mask = true,
        title,
        onCancel,
        onConfirm,
        maskCloseable = true,
        closeIcon = <AiOutlineClose/>,
        onCloseIcon,
        content,
        callType = "HTML",
        okText,
        cancelText,
        footer,
        className,
        style,
        width = '580px',
        timing = false,
        children
    }) => {

    if (typeof document === 'undefined')
        return <div onLoad={()=>console.log('ATTENTION: document(Modal) is undefined.')}/>;


    const classes = classnames('lole-modal', className, {
        'mask': mask
    });


    //create modal with class
    const createModalDom = () => {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id','lole-modal-wrapper');
        return wrapper;
    }

    const modalWrapper = (document.querySelector("#lole-modal-wrapper") ? document.querySelector("#lole-modal-wrapper") : createModalDom()) as HTMLDivElement;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const modalEl = useRef<HTMLDivElement>(modalWrapper);


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const $modal = modalEl.current;
        document.body.append($modal);
        return()=>{
            $modal?.remove();
        }
    }, []);


    // handle when modal has been closed
    const handleCancel = () => {


        const body:any = document.getElementsByClassName('lole-modal-content-wrapper')[0];
        //body.setAttribute("style","animation:;");
        body.style.animation = "modal-hidden .3s forwards";
        setTimeout(function (){
            onCancel && onCancel()
            if (callType === 'METHODS'){
                const wrapper = document.getElementById('lole-modal-wrapper');
                wrapper?.remove();
            }
        },300);
    }


    // handle user close modal with click mask
    const toggleModalVisibleByMask = () => {
        if (!maskCloseable)
            return;
        handleCancel();
    }


    // handle user click content
    const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }


    // handle user close modal with click close icon
    const handleCloseIcon = () => {
        handleCancel();
        onCloseIcon && onCloseIcon();
    }


    // handle user click button ok
    const handleOk = () => {
        handleCancel();
        onConfirm && onConfirm();
    }


    return(
       visible ? ReactDOM.createPortal((
           <div className={classes} style={style} onClick={toggleModalVisibleByMask}>
               <div className='lole-modal-content-wrapper' onClick={handleContentClick} style={{ width: width}}>
                   {
                       title && (
                           <div className='lole-modal-content-title'>
                               <div className='lole-modal-content-title-left'>{title}</div>
                               <div className='lole-modal-content-title-right' onClick={handleCloseIcon}>
                                   {
                                       closeIcon
                                   }
                               </div>
                           </div>
                       )
                   }
                   <div className='lole-modal-content-inner'>
                       {
                           callType === "HTML" ? children : content
                       }
                   </div>
                   {
                       footer === null ? null : (
                           <div className='lole-modal-content-footer'>
                               <div className='btn_wrapper'>
                                   {footer ? footer.map(_ => _) : (
                                       <Space>
                                           <Button onClick={handleCancel}>{cancelText ? cancelText : "取消"}</Button>
                                           <Button btnType="primary" onClick={handleOk}>{okText ? okText : "确定"}</Button>
                                       </Space>
                                   )}
                               </div>
                           </div>
                       )
                   }
               </div>
           </div>
       ), modalEl.current) :  null
    )
}


Modal.open = (options: BaseModalProps) => {
    const modalWrapper = judgeDOMExitAndCreateDOM("lole-modal-wrapper")
    ReactDOM.render(<Modal {...options}
                           callType={"METHODS"} />, modalWrapper);
}


export default Modal;

