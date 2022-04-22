import React, {Component, useState} from 'react';

import Message from "./components/Message/message";
import {Button, Table, Zone} from "./index";
import {AiFillStar, AiOutlineClose, AiOutlineHeart, AiOutlineStop} from "react-icons/ai";
import Notice from "./components/Notice/Notice";
import {Col, Row} from "./components/Grid";
import Rate from "./components/Rate/rate";
import Modal from "./components/Modal/modal";
import Carousel from "./components/Carousel/carousel";




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

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return(
        <div style={{width:'50vw'}}>
            <Zone.Group>
                <Zone>
                    <div>hello</div>
                </Zone>
                <Zone>
                    <div>hello</div>
                </Zone>
                <Zone>
                    <div>hello</div>
                </Zone>
            </Zone.Group>

        </div>
    )
    
}

export default App;
