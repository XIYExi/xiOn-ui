import {storiesOf} from "@storybook/react";
import Underline from "./underline";
import React from "react";
import Mark from "./mark";
import Text from "./text";
import {Zone} from "../../index";

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
