import React, {Component, useState} from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import CheckBox from "./components/CheckBox/check_box";
import {Switch} from "./components/Switch/switch";
import Space from "./components/Space/space";



library.add(fas);


const App:React.FC = () => {

    return(
        <>
            <Switch  defaultChecked={true}/>
            <Switch  type='text' checkedText={'yes'} unCheckedText={'no'}/>
            <Switch  type='slider' onChange={(e: any)=>console.log(e)} defaultChecked={true}/>



        </>
    )
    
}

export default App;
