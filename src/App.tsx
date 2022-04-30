import React, {Component, useState} from 'react';

import KanBan from "./components/KanBanLandy/kan_ban_lady";
import {Model, World} from "lingo3d-react";
import {Zone} from "./index";




const App:React.FC = () => {


    return(
        <>
            <div style={{
                width:'100vw',
                height:'100vh',
                backgroundImage: 'linear-gradient(125deg, #9040db, #ff72c2 50%, #ffd84f)'
            }}>
                <KanBan/>
                <div style={{}}>
                    <Zone basic textAlign='center' style={{paddingTop:'20em'}}>
                        <p style={{fontSize:'4em',color:'white'}}>Love Letter UI React</p>
                        <p style={{fontSize:'2em',color:'white'}}>
                            <pre>use {'<KanBan/>'} to</pre>
                            Render Your 3D Kan-Ban lady.</p>
                    </Zone>
                </div>
            </div>


        </>
    )
    
}

export default App;
