import React, {useState} from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Carousel from "./carousel";
import Space from "../Space";
import Button from "../Button";


storiesOf('Carousel Component',module)
    .add('基本使用',()=>{
        return(
            <>
                <Carousel>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>1</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>2</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>3</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>4</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>5</div>
                </Carousel>
            </>
        )
    })
    .add('自动轮播',()=>{
        return(
            <>
                <Carousel duration={2000}>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>1</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>2</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>3</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>4</div>
                </Carousel>
            </>
        )
    })
    .add('位置',()=>{
        const [position, setPosition] = useState('bottom');
        return(
            <>
                <Space>
                    <Button onClick={()=>setPosition('left')}>Left</Button>
                    <Button onClick={()=>setPosition('top')}>Top</Button>
                    <Button onClick={()=>setPosition('right')}>Right</Button>
                    <Button onClick={()=>setPosition('bottom')}>Bottom</Button>
                </Space>
                <Carousel duration={2000} position={position as any}>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>1</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>2</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>3</div>
                    <div style={{height:'160px',lineHeight:'160px',textAlign:'center',background:'#364d79',color:"#fff"}}>4</div>
                </Carousel>


            </>
            )

    })