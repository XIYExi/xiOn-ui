import React, {Component, useState} from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import CheckBox from "./components/CheckBox/check_box";
import Switch from "./components/Switch/switch";



library.add(fas);


const App:React.FC = () => {

    return(
        <>
            {/*<Switch onChange={(e)=>console.log(e)}/>*/}

        </>
    )
    
}

export default App;
