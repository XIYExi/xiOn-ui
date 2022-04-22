import React from "react";
import {storiesOf} from "@storybook/react";
import {Zone} from "../../index";


storiesOf('Zone Component',module)
    .add('基本使用',()=>{
        return(
            <Zone basic>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
                tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                ultricies mi vitae est. Mauris placerat eleifend leo.
            </Zone>
        )
    })
    .add('吸附',()=>{
        return(
            <div>
                <Zone attached='top'>This segment is on top</Zone>
                <Zone attached>This segment is attached on both sides</Zone>
                <Zone attached='bottom'>This segment is on bottom</Zone>
            </div>
        )
    })
    .add('圆形',()=>{
        const square = { width: 175, height: 175 }
        return(
            <>
            <Zone circular style={square}>
               <h2>Zone!</h2>
            </Zone>
            <Zone circular inverted style={square}>
                <h2>Zone!</h2>
            </Zone>
            </>
        )
    })
    .add('主题色',()=>{
        const colors = ['primary', 'orange', 'yellow', 'indigo', 'green', 'teal', 'red', 'purple', 'pink', 'cyan', 'gray', 'black',]
        return(
            <>
                {
                    new Array(12).fill(null).map((item,index)=>(
                        <Zone key={index} color={colors[index] as any}>{colors[index]}</Zone>
                    ))
                }
            </>
        )
    })
    .add('反色',()=>{
        const colors = ['primary', 'orange', 'yellow', 'indigo', 'green', 'teal', 'red', 'purple', 'pink', 'cyan', 'gray', 'black',]
        return(
            <>
                {
                    new Array(12).fill(null).map((item,index)=>(
                        <Zone key={index} inverted color={colors[index] as any}>{colors[index]}</Zone>
                    ))
                }
            </>
        )
    })
    .add('紧凑 / 松散',()=> {
        return(
            <>
                <Zone compact>紧凑</Zone>
                <Zone padded>松散</Zone>
            </>
        )
    })
    .add('浮动',()=>{
        return(
            <div>
                <Zone floated='left'>This Zone will appear to the left</Zone>
                <Zone floated='right'>This Zone will appear to the right</Zone>
            </div>
        )
    })
    .add('尺寸',()=>{
        const sizes = ['small','medium','large'];
        return(
            <>
                {sizes.map((size) => (
                    <Zone.Group key={size} size={size as any}>
                        <Zone>It's a {size} segment</Zone>
                        <Zone>And it's a {size} segment, too</Zone>
                    </Zone.Group>
                ))}
            </>
        )
    })
    .add('文本对齐',()=>{
        return(
            <div>
                <Zone textAlign='right'>Right aligned content.</Zone>
                <Zone textAlign='left'>Left aligned content.</Zone>
                <Zone textAlign='center'>Center aligned content.</Zone>
            </div>
        )
    })
    .add('堆叠',()=>{
        return(
            <Zone piled>Pellentesque habitant morbi tristique senectus.</Zone>
        )
    })
    .add('提升',()=>{
        return(
            <Zone raised>Pellentesque habitant morbi tristique senectus.</Zone>
        )
    })
    .add('叠放',()=>{
        return (
            <Zone stacked>Pellentesque habitant morbi tristique senectus.</Zone>
        )
    })
    .add('垂直叠加',()=>{
        return(
            <div>
                <Zone vertical>
                    Te eum doming eirmod, nominati pertinacia argumentum ad his.
                </Zone>
                <Zone vertical>Pellentesque habitant morbi tristique senectus.</Zone>
                <Zone vertical>
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
                </Zone>
            </div>
        )
    })
    .add('禁用',()=>{
        return(
            <Zone disabled>Disabled Zone</Zone>
        )
    })
    .add('水平组',()=>{
        return(
            <Zone.Group horizontal>
                <Zone>Left</Zone>
                <Zone>Middle</Zone>
                <Zone>Right</Zone>
            </Zone.Group>
        )
    })
    .add('复杂组合',()=>{
        return(
            <Zone.Group>
                <Zone>Top</Zone>
                <Zone.Group>
                    <Zone>Zones Zone Top</Zone>
                    <Zone>Zones Zone Middle</Zone>
                    <Zone>Zones Zone Bottom</Zone>
                </Zone.Group>
                <Zone.Group horizontal>
                    <Zone>Top</Zone>
                    <Zone>Middle</Zone>
                    <Zone>Bottom</Zone>
                </Zone.Group>
                <Zone>Bottom</Zone>
            </Zone.Group>
        )
    })
    .add('组堆叠',()=>{
        return(
            <Zone.Group piled>
                <Zone>Top</Zone>
                <Zone>Middle</Zone>
                <Zone>Bottom</Zone>
            </Zone.Group>
        )
    })
    .add('组提升',()=>{
        return(
            <Zone.Group raised>
                <Zone>Left</Zone>
                <Zone>Middle</Zone>
                <Zone>Right</Zone>
            </Zone.Group>
        )
    })
    .add('组叠放',()=>{
        return(
            <Zone.Group stacked>
                <Zone>Top</Zone>
                <Zone>Middle</Zone>
                <Zone>Bottom</Zone>
            </Zone.Group>
        )
    })
