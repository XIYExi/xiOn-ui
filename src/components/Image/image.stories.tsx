import React, {useState} from "react";
import {storiesOf} from "@storybook/react";
import {Button, Image, Space, Zone} from "../../index";


storiesOf('Image Component',module)
    .add('基本使用',()=>{
        return(
            <>
                <Image src='./assets/lole.png' size='small'  alt='lole-UI'/>
            </>
        )
    })
    .add('作为链接',()=>{
        return(
            <Image as='a'
                   target='_blank'
                   alt='超链接'
                   src='./assets/lole.png'
                   size='small'
                   href='http://lole.feifeilong.work'
            />
        )
    })
    .add('作为头像',()=>{
        return(
            <div>
                <Image alt='头像' src='./assets/meimei.jpg' avatar />
                <span>xiye</span>
            </div>
        )
    })
    .add('边框',()=>{
        return(
            <Image alt='添加边框' src='./assets/lole.png' size='medium' bordered />
        )
    })
    .add('居中',()=>{
        return(
            <Zone>
                <Image alt='lole' src='./assets/lole.png' size='medium' centered />
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
                <Image alt='lole' src='./assets/lole.png' size='small' centered />
                <p>
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                    facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                    porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                    everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                    per, quas minimum postulant per id.
                </p>
            </Zone>
            )
    })
    .add('圆形',()=>{
        return(
            <Image alt='lole' src='./assets/meimei.jpg' size='medium' circular />
        )
    })
    .add('浮动',()=>{
        return(
            <Zone>
                <Image alt='lole' src='./assets/lole.png' size='small' floated='left' />
                <p>
                    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                    facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                    referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                    electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                    ex natum rebum iisque.
                </p>
                <Image alt='lole' src='./assets/lole.png' size='small' floated='right' />
                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>
                <p>
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                    facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                    porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                    everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                    per, quas minimum postulant per id.
                </p>
            </Zone>
        )
    })
    .add('容器自适应',()=>{
        return(
            <Image alt='lole' src='./assets/meimei.jpg' fluid />
        )
    })
    .add('圆角',()=>{
        return(
            <Image alt='lole' src='./assets/lole.png' size='medium' rounded />
        )
    })
    .add('尺寸',()=>{
        return(
            <Space direction='vertical'>
                <Image alt='lole' src='./assets/meimei.jpg' size='mini' />

                <Image alt='lole' src='./assets/meimei.jpg' size='tiny' />

                <Image alt='lole' src='./assets/meimei.jpg' size='small' />

                <Image alt='lole' src='./assets/meimei.jpg' size='medium' />

                <Image alt='lole' src='./assets/meimei.jpg' size='large' />
            </Space>
        )
    })
    .add('间距',()=>{
        return(
            <div>
                <Zone>
                    <p>
                        Te eum doming eirmod, nominati pertinacia{' '}
                        <Image alt='lole' src='./assets/lole.png' size='mini' spaced /> argumentum ad his. Ex eam alia
                        facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                        referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                        electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
                        Mei ex natum rebum iisque.
                    </p>
                </Zone>
                <p>
                    <Image alt='lole' src='./assets/lole.png' size='mini' spaced='right' />
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>
                <p>
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                    facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                    porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                    everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                    per, quas minimum postulant per id.
                    <Image alt='lole' src='./assets/lole.png' size='mini' spaced='left' />
                </p>
            </div>
        )
    })
    .add('垂直排版',()=>{
        return(
            <div>
                <Image alt='lole' src='./assets/meimei.jpg' size='tiny' verticalAlign='top' />
                <span>Top Aligned</span>

                <div style={{margin:'10px'}}></div>

                <Image alt='lole' src='./assets/meimei.jpg' size='tiny' verticalAlign='middle' />{' '}
                <span>Middle Aligned</span>

                <div style={{margin:'10px'}}></div>

                <Image alt='lole' src='./assets/meimei.jpg' size='tiny' verticalAlign='bottom' />{' '}
                <span>Bottom Aligned</span>
            </div>
        )
    })
    .add('禁用',()=>{
        return(
            <Image alt='lole' src='./assets/lole.png' size='medium' disabled />
        )
    })
    .add('隐藏',()=>{

        const [hidden,setHidden] = useState<boolean>(false);

        return(
            <>
                <Button onClick={()=>setHidden(!hidden)}>点击隐藏/显示图片</Button>
                <Image hidden={hidden} alt='lole' src='./assets/lole.png' size='medium' disabled />
            </>
        )
    })
    .add('组',()=>{
        return(
            <div>
                <Image.Group size='tiny'>
                    <Image alt='lole' src='./assets/lole.png' />
                    <Image alt='lole' src='./assets/lole.png' />
                    <Image alt='lole' src='./assets/lole.png' />
                    <Image alt='lole' src='./assets/lole.png' />
                </Image.Group>

                <Image.Group size='small'>
                    <Image alt='lole' src='./assets/meimei.jpg' />
                    <Image alt='lole' src='./assets/meimei.jpg' />
                    <Image alt='lole' src='./assets/meimei.jpg' />
                    <Image alt='lole' src='./assets/meimei.jpg' />
                </Image.Group>
            </div>
        )
    })