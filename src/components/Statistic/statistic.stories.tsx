import React from "react";
import {storiesOf} from "@storybook/react";
import {Statistic, Image, Zone} from "../../index";
import {AiFillEye} from "react-icons/ai";


storiesOf('Statistic Component',module)
    .add('基本使用',()=>{
        return(
            <>
                <Statistic>
                    <Statistic.Value>5,550</Statistic.Value>
                    <Statistic.Label>浏览量</Statistic.Label>
                </Statistic>

                <Statistic>
                    <Statistic.Label>收藏数</Statistic.Label>
                    <Statistic.Value>23,333</Statistic.Value>
                </Statistic>
            </>
        )
    })
    .add('组',()=>{
        return(
            <Statistic.Group>
                <Statistic>
                    <Statistic.Value>22</Statistic.Value>
                    <Statistic.Label>Faves</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>31,200</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>22</Statistic.Value>
                    <Statistic.Label>Members</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        )
    })
    .add('快速渲染',()=>{
        return(
            <Statistic label='快速渲染' value={<div>可<br/>还<br/>行</div>} text/>
        )
    })
    .add('批量渲染',()=>{
        const items = [
            { key: 'faves', label: 'Faves', value: '22' },
            { key: 'views', label: 'Views', value: <div>批量<br/>渲染</div>, text:true },
            { key: 'members', label: 'Members', value: '22' },
        ]
        return(
            <Statistic.Group items={items} />
        )
    })
    .add('等宽度划分',()=>{
        return(
            <Statistic.Group widths='three'>
                <Statistic>
                    <Statistic.Value>22</Statistic.Value>
                    <Statistic.Label>Faves</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>31,200</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>22</Statistic.Value>
                    <Statistic.Label>Members</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        )
    })
    .add('夹带私货',()=>{
        return(
            <Statistic.Group>
                <Statistic>
                    <Statistic.Value>22</Statistic.Value>
                    <Statistic.Label>岁</Statistic.Label>
                </Statistic>

                <Statistic>
                    <Statistic.Value text>
                        妹
                        <br />
                        妹
                    </Statistic.Value>
                    <Statistic.Label>？</Statistic.Label>
                </Statistic>

                <Statistic>
                    <Statistic.Value>
                        1 <AiFillEye/>
                    </Statistic.Value>
                    <Statistic.Label>identification</Statistic.Label>
                </Statistic>

                <Statistic>
                    <Statistic.Value>
                        <Image alt='lole' src="https://semantic-ui.com/images/avatar/small/joe.jpg" inline circular />
                        100%
                    </Statistic.Value>
                    <Statistic.Label>过期货 </Statistic.Label>
                </Statistic>
            </Statistic.Group>
        )
    })
    .add('水平排版',()=>{
        return(
            <Statistic horizontal>
                <Statistic.Value>2,204</Statistic.Value>
                <Statistic.Label>Views</Statistic.Label>
            </Statistic>
        )
    })
    .add('主题色',()=>{
        const colors = ['primary', 'orange', 'yellow', 'indigo','green', 'teal', 'red', 'purple','pink', 'cyan', 'gray'];
        const names = ['主题色','橙色','黄色','靛蓝色','绿色','青色','红色','紫色','粉色','蓝绿色','灰色']
        return(
            <>
                {
                    colors.map((item,index)=>(
                        <Statistic key={index} color={item as any}>
                            <Statistic.Label>{names[index]}</Statistic.Label>
                            <Statistic.Value>{item}</Statistic.Value>
                        </Statistic>
                    ))
                }
                <Statistic>
                    <Statistic.Label>默认</Statistic.Label>
                    <Statistic.Value>default</Statistic.Value>
                </Statistic>
            </>
        )
    })
    .add('浮动',()=>{
        return(
            <Zone>
                <Statistic floated='right'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                    facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                    referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                    electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                    ex natum rebum iisque.
                </p>

                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>

                <Statistic floated='left'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                    facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                    porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                    everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                    per, quas minimum postulant per id.
                </p>
                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>
            </Zone>
        )
    })
    .add('尺寸',()=>{
        return(
            <>
                <div>
                    <Statistic size='mini'>
                        <Statistic.Label>18-year-old</Statistic.Label>
                        <Statistic.Value>18-year-old</Statistic.Value>
                    </Statistic>
                </div>
                <div>
                    <Statistic size='tiny'>
                        <Statistic.Label>sister</Statistic.Label>
                        <Statistic.Value>sister</Statistic.Value>
                    </Statistic>
                </div>
                    <div>
                        <Statistic size='small'>
                            <Statistic.Label>卡哇伊</Statistic.Label>
                            <Statistic.Value>卡哇伊</Statistic.Value>
                        </Statistic>
                </div>
                <div>
                    <Statistic>
                        <Statistic.Label>好き</Statistic.Label>
                        <Statistic.Value>好き</Statistic.Value>
                    </Statistic>
                </div>
                <div>
                    <Statistic size='large'>
                        <Statistic.Label>好き</Statistic.Label>
                        <Statistic.Value>好き</Statistic.Value>
                    </Statistic>
                </div>
                <div>
                    <Statistic size='huge'>
                        <Statistic.Label>大好き</Statistic.Label>
                        <Statistic.Value>大好き</Statistic.Value>
                    </Statistic>
                </div>
            </>
        )
    })
    .add('垂直组',()=>{
        return(
            <Statistic.Group horizontal>
                <Statistic>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>3,322</Statistic.Value>
                    <Statistic.Label>Downloads</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>22</Statistic.Value>
                    <Statistic.Label>Tasks</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        )
    })
