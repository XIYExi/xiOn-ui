import React, {useCallback, useEffect, useRef, useState} from "react";
import {AmbientLight, Camera, Model, ThirdPersonCamera, World} from "lingo3d-react";
import {kMaxLength} from "buffer";


interface BaseKanBanProps{
    [key:string]:any
}


const KanBan:React.FC<BaseKanBanProps> = (props) => {

    const kanban = useRef();

    const [anim,setAnim] = useState('Idle');
    let flag = false;
    let i: NodeJS.Timeout, j: NodeJS.Timeout;

    const handleDancing =() => {

        (kanban.current as any).animation = 'Dancing';
        setTimeout(()=>{
            (kanban.current as any).animation = 'Idle';
            console.log('Dancing -> Idle',kanban.current,anim);
        },2500);

    }

    const handleGreeting =()=>{
        (kanban.current as any).animation = 'Greeting';
        setTimeout(()=>{
            (kanban.current as any).animation = 'Idle';
            console.log('Greeting -> Idle',kanban.current,anim);
        },4700);
    }

    return(
        <>
            <World color="transparent" >
                <Model src={process.env.PUBLIC_URL+'/assets/model/model.fbx'}
                       // @ts-ignore
                       ref={kanban}
                       animations={{
                           Idle: process.env.PUBLIC_URL+'/assets/model/standby0.fbx',
                           Greeting: process.env.PUBLIC_URL+'/assets/model/greeting.fbx',
                           Dancing: process.env.PUBLIC_URL+'/assets/model/dancing.fbx'
                       }}
                       toon={true}
                       innerX={70}
                       innerY={-45}
                       innerZ={-13}
                       rotationY={-33}
                       rotationX={0}
                       rotationZ={1}
                       animation = {anim}
                       scale={8}
                       onClick={handleDancing}
                       onMouseOver={handleGreeting}
                />
                <AmbientLight intensity={0.14}/>
            </World>
        </>
    )
}

export default KanBan;
