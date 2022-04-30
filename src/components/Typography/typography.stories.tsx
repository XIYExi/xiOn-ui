import {storiesOf} from "@storybook/react";
import Underline from "./underline";
import React from "react";
import Mark from "./mark";
import Text from "./text";
import {Zone} from "../../index";
import Link from "./link";
import Blockquote from "./blockquote";

storiesOf('Typography Component',module)
    .add('下划线',()=>{
        return(
            <p>
                你知道吗，
                乌拉圭的人口有345.7万，
                同时,<Underline>仅澳大利亚就有4700万只袋鼠</Underline>。
                如果袋鼠决定入侵乌拉圭，
                那么每一个乌拉圭人都要打14只袋鼠。
                你不知道，
                你不在乎，
                因为你只关心你自己
            </p>
        )
    })
    .add('下划线 类别2',()=>{
        return(
            <p>
                你知道吗，
                乌拉圭的人口有345.7万，
                同时,<Underline type={'type2'}>仅澳大利亚就有4700万只袋鼠</Underline>。
                如果袋鼠决定入侵乌拉圭，
                <Underline type='type2' presetGradient='4'>那么每一个乌拉圭人都要打14只袋鼠</Underline>。
                你不知道，
                你不在乎，
                因为你只关心你自己
            </p>
        )
    })
    .add('下划线 类别3',()=>{
        return(
            <p>
                你知道吗，
                乌拉圭的人口有345.7万，
                同时,<Underline under3Mode='1' type={'type3'}>仅澳大利亚就有4700万只袋鼠</Underline>。
                如果袋鼠决定入侵乌拉圭，
                <Underline color='sky' under3Mode='2' type='type3'>那么每一个乌拉圭人都要打14只袋鼠</Underline>。
                你不知道，
                你不在乎，
                <Underline color='leaf' under3Mode='3' type='type3'>因为你只关心</Underline>你自己
            </p>
        )
    })
    .add('Mark',()=>{
        return(
            <p>
                你知道吗，
                <Mark>乌拉圭的人口有345.7万</Mark>，
                同时,仅澳大利亚就有4700万只袋鼠。
                如果袋鼠决定入侵乌拉圭，
                那么每一个乌拉圭人都要打14只袋鼠。
                你不知道，
                你不在乎，
                <Mark>因为你只关心你自己</Mark>.
            </p>
        )
    })
    .add('大小写',()=>{
        return(
            <p>
                <p>ABCDEFG 2 abcdefg: <Text write='lower'>ABCDEFG</Text></p>
                <p>abcdefg 2 ABCDEFG : <Text write='upper'>abcdefg</Text></p>
            </p>
        )
    })
    .add('首字母大写',()=>{
        return(
            <Zone.Group horizontal>
                <Zone>
                    <p>
                        <Text dropcap>你</Text>知道吗，
                        乌拉圭的人口有345.7万，
                        同时,仅澳大利亚就有4700万只袋鼠。
                        如果袋鼠决定入侵乌拉圭，
                        那么每一个乌拉圭人都要打14只袋鼠。
                        你不知道，
                        你不在乎，
                        因为你只关心你自己
                    </p>
                </Zone>
                <Zone>
                    <p>
                        <Text dropcap style={{color:'red'}}>你</Text>知道吗，
                        乌拉圭的人口有345.7万，
                        同时,仅澳大利亚就有4700万只袋鼠。
                        如果袋鼠决定入侵乌拉圭，
                        那么每一个乌拉圭人都要打14只袋鼠。
                        你不知道，
                        你不在乎，
                        因为你只关心你自己
                    </p>
                </Zone>
                <Zone>
                    <p>
                        <Text dropcap background={'gradient-2'}>你</Text>知道吗，
                        乌拉圭的人口有345.7万，
                        同时,仅澳大利亚就有4700万只袋鼠。
                        如果袋鼠决定入侵乌拉圭，
                        那么每一个乌拉圭人都要打14只袋鼠。
                        你不知道，
                        你不在乎，
                        因为你只关心你自己
                    </p>
                </Zone>
            </Zone.Group>

        )
    })
    .add('超链接',()=>{
        return(
            <>
                <Zone stacked color='primary'>
                    <Link href='#' hover style={{color: '#5eb9f0'}}>Link example</Link>
                    <Link href='#' hover>Link example</Link>
                    <Link href='#' hover more>Link example</Link>
                </Zone>

                <Zone stacked color='primary'>
                    <Link href='#' hover='type2' color='sky'>Link example</Link>
                    <Link href='#' hover='type2' >Link example</Link>
                    <Link href='#' hover='type2' more>Link example</Link>
                </Zone>

                <Zone stacked color='primary'>
                    <Link href='#' hover='type3' color='leaf'>Link example</Link>
                    <Link href='#' hover='type3'>Link example</Link>
                    <Link href='#' hover='type3' more>Link example</Link>
                </Zone>

            </>
        )
    })
    .add('文本区域块',()=>{
        return(
            <Zone.Group>
                <Zone basic={true}>
                    <Blockquote footer footerContent='Love Letter UI'>
                        <p style={{lineHeight: 1.5,fontSize: '16px'}}>
                            你知道吗？
                            母猪产后护理，首先要从产前做起，
                            母猪产前四五天要逐渐减少饲喂量，
                            其目的是减少腹部压力产前吃得少产后才能吃得多。
                            若产前吃得多，不仅会使产程过长，还会造成产后胃积食。
                            你不知道，你只关心你的袋鼠。
                        </p>
                    </Blockquote>
                </Zone>
                <Zone basic>
                    <Blockquote icon>
                        <p style={{lineHeight: 1.5,fontSize: '16px'}}>
                            你知道吗？
                            母猪产后护理，首先要从产前做起，
                            母猪产前四五天要逐渐减少饲喂量，
                            其目的是减少腹部压力产前吃得少产后才能吃得多。
                            若产前吃得多，不仅会使产程过长，还会造成产后胃积食。
                            你不知道，你只关心你的袋鼠。
                        </p>
                    </Blockquote>
                </Zone>
            </Zone.Group>
        )
    })
