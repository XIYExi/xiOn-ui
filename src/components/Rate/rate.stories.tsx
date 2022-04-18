import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Rate from "./rate";
import {AiFillStar, AiOutlineHeart, AiOutlineStop} from "react-icons/ai";
import Space from "../Space";

const BaseRate = () => {
    return (
        <>
            <Rate defaultValue={3}/>
        </>
    )
}

const HalfRate = () => {
    return (
        <>
            <Rate allowHalf={true}/>
        </>
    )
}

const DisabledRate = () => {
    return(
        <>
            <Rate disabled/>
        </>
    )
}

const ClearRate = () => {
    return(
        <>
            <Rate allowedClear/>
        </>
    )
}

const DIYRate = () => {
    const list = [
        <AiFillStar size='30px'/>,
        <AiOutlineHeart size='30px'/>,
        <AiOutlineStop size='30px'/>,
    ]
    return(
        <>
            <Rate character={list}/>
        </>
    )
}

const TextRate = () => {
    const text = ['0.5￥','1￥','1.5￥','2￥','2.5￥','3￥','3.5￥','4￥','4.5￥','5￥','5.5￥','6￥','6.5￥','7￥']
    const textNormal = ['1￥','2￥','3￥','4￥','5￥','6￥','7￥'];

    return(
        <>
            <Space direction='vertical'>
                <Rate count={7} show text={text} allowHalf/>
                <Rate show text={textNormal}/>
            </Space>

        </>
    )
}

storiesOf('Rate Component',module)
    .add('基本使用',BaseRate)
    .add('半选',HalfRate)
    .add('只读',DisabledRate)
    .add('清除',ClearRate)
    .add('自定义字符',DIYRate)
    .add('文案展现',TextRate)