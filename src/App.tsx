import React, {Component, useState} from 'react';

import Message from "./components/Message/message";
import {Button} from "./index";
import {AiOutlineStop} from "react-icons/ai";
import Notice from "./components/Notice/Notice";



const App:React.FC = () => {


    const handleNormalClick = () => {
        Notice["info"]({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            duration: 5000,
            placement: 'bottomRight'
        })
    }

    return(
        <>
            <div style={{position:'absolute',top:'80%'}}>
                <Button btnType='primary' onClick={handleNormalClick}>ClickMe</Button>
            </div>

        </>
    )
    
}

export default App;
