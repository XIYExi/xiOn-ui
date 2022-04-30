import React, {Component, useState} from 'react';

import KanBan from "./components/KanBanLandy/kan_ban_lady";
import {Model, World} from "lingo3d-react";
import {Zone} from "./index";
import Link from "./components/Typography/link";
import Blockquote from "./components/Typography/blockquote";


const App:React.FC = () => {


    return(
        <Zone.Group>
            <Zone basic={true}>
                <Blockquote footer footerContent='Love Letter UI'>
                    <p style={{lineHeight: 1.5,fontSize: '16px'}}>
                        你知道吗？
                        母猪产后护理，首先要从产前做起，
                        母猪产前四五天要逐渐减少饲喂量，
                        其目的是减少腹部压力产前吃得少产后才能吃得多。
                        若产前吃得多，不仅会使产程过长，还会造成产后胃积食。
                        你不知道，你只关心你的袋鼠。
                    </p>
                </Blockquote>
            </Zone>

            <Zone basic>
                <Blockquote icon>
                    <p style={{lineHeight: 1.5,fontSize: '16px'}}>
                        你知道吗？
                        母猪产后护理，首先要从产前做起，
                        母猪产前四五天要逐渐减少饲喂量，
                        其目的是减少腹部压力产前吃得少产后才能吃得多。
                        若产前吃得多，不仅会使产程过长，还会造成产后胃积食。
                        你不知道，你只关心你的袋鼠。
                    </p>
                </Blockquote>
            </Zone>

        </Zone.Group>
    )
    
}

export default App;
