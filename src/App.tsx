import React, {Component, useState} from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import CheckBox from "./components/CheckBox/check_box";
import {Switch} from "./components/Switch/switch";
import Space from "./components/Space/space";
import Radio from "./components/Radio/radio";
import RadioGroup from "./components/Radio/radio_group";



library.add(fas);


const App:React.FC = () => {

    return(
        <>
            <RadioGroup value={1}>
                <Radio value={1} label='Radio-1' onChange={(e)=>console.log(e.target.value)}/>
                <Radio value={2} label='Radio-2' onChange={(e)=>console.log(e.target.value)}/>
            </RadioGroup>
        </>
    )
    
}

export default App;
