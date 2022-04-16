import React, {Component, useState} from 'react';

import Message from "./components/Message/message";
import {Button} from "./index";
import {AiFillStar, AiOutlineClose, AiOutlineHeart, AiOutlineStop} from "react-icons/ai";
import Notice from "./components/Notice/Notice";
import {Col, Row} from "./components/Grid";
import Rate from "./components/Rate/rate";
import Modal from "./components/Modal/modal";



const App:React.FC = () => {


    const handleNormalClick = () => {
        Notice["info"]({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            duration: 5000,
            placement: 'bottomRight'
        })
    }

    const list = [
        <AiFillStar size='30px'/>,
        <AiOutlineHeart size='30px'/>,
        <AiOutlineStop size='30px'/>,
    ]

    const text = ['0.5￥','1￥','1.5￥','2￥','2.5￥','3￥','3.5￥','4￥','4.5￥','5￥','5.5￥','6￥','6.5￥','7￥']
    const textNormal = ['1￥','2￥','3￥','4￥','5￥','6￥','7￥'];

    const [visible, setVisible] = useState(false);
    return(
        <>

            <div style={{width:'300px',height:'300px'}}>

                {/*<Modal visible={visible}
                       title='Modal'
                       width='80%'
                       okText='好的蛤'
                       cancelText='打咩打咩哟'
                       onCancel={()=>setVisible(false)}
                       mask={true}
                >
                    <Button btnType='primary'>这是Content</Button>
                </Modal>*/}
                <Button onClick={()=>setVisible(true)}>Me</Button>
                <Button onClick={()=>{
                    //setVisible(true)
                    Modal.open({
                        visible: true,
                        title: "this is modal title",
                        content: "Some contents..",
                        onCancel: () => {setVisible(false)},
                        onConfirm: () => {setVisible(false)}
                    })
                }}>Open</Button>
            </div>
        </>
    )
    
}

export default App;
