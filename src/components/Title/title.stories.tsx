import React from "react";
import {storiesOf} from "@storybook/react";
import {Title, Image, Zone} from "../../index";
import {AiTwotoneAlert} from "react-icons/ai";
import {BsImageAlt} from "react-icons/bs";


storiesOf('Title Component',module)
    .add('基本使用',()=>{
        return(
            <>
                <Title size='huge'>Huge Header</Title>
                <Title size='large'>Large Header</Title>
                <Title size='medium'>Medium Header</Title>
                <Title size='small'>Small Header</Title>
                <Title size='tiny'>Tiny Header</Title>
            </>
        )
    })
    .add('组合',()=>{
        return(
            <Title size='large' icon>
                <AiTwotoneAlert className={'icon'} />
                Account Settings
                <Title.Subheader>
                    Manage your account settings and set e-mail preferences.
                </Title.Subheader>
            </Title>
        )
    })
    .add('一个清新脱俗的文章标题',()=>{
        return(
            <div>
                <Title size='large' icon textAlign='center'>
                    <AiTwotoneAlert className={'icon'} />Blog Title
                </Title>
                <Image
                    alt=''
                    centered
                    size='large'
                    src='/images/wireframe/centered-paragraph.png'
                />
            </div>
        )
    })
    .add('副标题',()=>(
        <div>
            <Title sub>Price</Title>
            <span>$10.99</span>
        </div>
    ))
    .add('使用图片',()=>(
        <>
            <Title size='large'>
                <Image alt='' circular src='./assets/meimei.jpg' />
                <Title.Container>
                    妹妹
                    <Title.Subheader>嘶哈嘶哈</Title.Subheader>
                </Title.Container>
            </Title>
        </>
    ))
    .add('使用图标',()=>(
        <Title size='large'>
            <BsImageAlt/>
            <Title.Container>一个帅到我也不知道是什么的图标</Title.Container>
        </Title>
    ))
    .add('禁用',()=>(
        <Title size='large' disabled>
            Disabled Header
        </Title>
    ))
    .add('区块',()=>(
        <Title size='large' block>
            此时Title将被类似Zone的区块包裹
        </Title>
    ))
    .add('浮动',()=>(
        <Zone>
            <Title size='large' floated='right'>
                Float Right
            </Title>
            <Title size='large' floated='left'>
                Float Left
            </Title>
        </Zone>
    ))
    .add('文本对齐',()=>(
        <Zone>
            <Title size='large' textAlign='right'>
                Float Right
            </Title>
            <Title size='large' textAlign='left'>
                Float Left
            </Title>
            <Title size='large' textAlign='center'>
                Centered
            </Title>
        </Zone>
    ))
    .add('色彩',()=>{
        const colors = ['primary', 'orange', 'yellow', 'indigo','green', 'teal', 'red', 'purple','pink', 'cyan', 'gray'];
        return(
            <>
                {
                    colors.map((item,index)=>(
                        <Title size='medium' color={item as any}>{colors[index]}</Title>
                    ))
                }
            </>
        )
    })