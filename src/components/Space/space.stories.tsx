import React, {useState} from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Space from "./space";
import Button from "../Button/button";
import styled from "styled-components";
import InputNumber from "../InputNumber/input_number";

const SpaceBase = () => {
    return(
        <>
            <Space>
                xiOn UI
                {
                    new Array(5).fill(null).map((_,index)=>{
                        const key = index+1;
                        return(
                            <Button key={key} btnType='primary' >{`xiOn UI ${key}`}</Button>
                        )
                    })
                }
            </Space>
        </>
    )
}

const SpaceVertiacl = () => {
    return(
        <>
            <Space direction="vertical">
                <Button btnType='primary'>xiOn UI 1</Button>
                <Button btnType='primary'>xiOn UI 1</Button>
                <Button btnType='primary'>xiOn UI 1</Button>
            </Space>
        </>
    )
}

const SpaceSize = () => {
    return(
        <>
            <Space size='small'>
                <Button btnType="primary">Primary</Button>
                <Button>Default</Button>
                <Button btnType="dashed">Dashed</Button>
                <Button btnType="link">Link</Button>
            </Space>
            <br/><br/>
            <Space size='middle'>
                <Button btnType="primary">Primary</Button>
                <Button>Default</Button>
                <Button btnType="dashed">Dashed</Button>
                <Button btnType="link">Link</Button>
            </Space>
            <br/><br/>
            <Space size='large'>
                <Button btnType="primary">Primary</Button>
                <Button>Default</Button>
                <Button btnType="dashed">Dashed</Button>
                <Button btnType="link">Link</Button>
            </Space>
        </>
    )
}

const SpaceAlign = () => {

    const Container = styled.div`
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    `;

    const Block = styled.div`
      flex: none;
      margin: 8px 4px;
      padding: 4px;
      border: 1px solid #40a9ff;
    `;

    const Span = styled.span`
      display: inline-block;
      padding: 32px 8px 16px;
      background: rgba(150, 150, 150, 0.2);
    `;

    return(
        <Container>
            <Block>
                <Space align="center">
                    center
                    <Button btnType="primary">Primary</Button>
                    <Span>Block</Span>
                </Space>
            </Block>
            <Block>
                <Space align="start">
                    start
                    <Button btnType="primary">Primary</Button>
                    <Span>Block</Span>
                </Space>
            </Block>
            <Block>
                <Space align="end">
                    end
                    <Button btnType="primary">Primary</Button>
                    <Span>Block</Span>
                </Space>
            </Block>
            <Block>
                <Space align="baseline">
                    baseline
                    <Button btnType="primary">Primary</Button>
                    <Span>Block</Span>
                </Space>
            </Block>
        </Container>
    )
}

const SpaceDIYSize = () => {

    const [size,setSize] = useState(8);

    return(
        <>
            <InputNumber
                min={0}
                max={100}
                step={1}
                defaultValue={8}
                onChange={(value)=>setSize(Number(value.target.value))}
                onClickAdd={(value,count)=>setSize(Number(count))}
                onClickSub={(e,count)=>setSize(Number(count))}
            />
            <br/><br/>
            <Space size={size}>
                <Button btnType="primary">Primary</Button>
                <Button>Default</Button>
                <Button btnType="dashed">Dashed</Button>
                <Button btnType="link">Link</Button>
            </Space>
        </>

    )
}

const SpaceAutoWrapp = () => {
    return(
        <Space size={[8, 16]} wrap>
            {new Array(20).fill(null).map((_, index) => (
                <Button btnType='primary' key={index}>{`xiOn UI Button ${index+1}`}</Button>
            ))}
        </Space>
    )
}


storiesOf('Space Component',module)
    .add('基本使用', SpaceBase)
    .add('垂直间距', SpaceVertiacl)
    .add('三种间距', SpaceSize)
    .add('对齐',SpaceAlign)
    .add('自定义间距',SpaceDIYSize)
    .add('自动换行',SpaceAutoWrapp)


