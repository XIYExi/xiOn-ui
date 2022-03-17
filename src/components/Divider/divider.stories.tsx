import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Divider from "./divider";

const DividerBase = () => {
    return(
        <>
            <p>Thank you for using Xion UI, which is a かわいい cherry white quadratic component for quickly building network projects</p>
            <Divider/>
            <p>Thank you for using Xion UI, which is a かわいい cherry white quadratic component for quickly building network projects</p>
            <Divider dashed/>
        </>
    )
}

const DividerWithText = ()=>{
    return(
        <>
            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using Xion UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider dashed>Text</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using Xion UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider orientation="left">Left Text</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using Xion UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider orientation="right">Right Text</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using Xion UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider orientation="left" orientationMargin="0" dashed>Left Text with 0 orientationMargin</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using Xion UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider orientation="right" orientationMargin={50}>Right Text with 50px orientationMargin</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using Xion UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
        </>
    )

}

const DividerVertical = () => {
    return(
        <>
            <span>xiOn</span>
            <Divider type="vertical" />
            <span>UI</span>
            <Divider type="vertical" />
            <span>かわいい</span>
            <Divider type="vertical" />
            <span>好き</span>
            <Divider type='vertical'/>
            <span>好き</span>
            <Divider type='vertical'/>
            <span>大好き</span>
            <Divider type='vertical'/>
        </>
    )
}

const DividerPlain = () => {
    return(
        <>
            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using xiOn UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider dashed plain>Text</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using xiOn UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider orientation="left" plain>Left Text</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using xiOn UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider orientation="right" plain>Right Text</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using xiOn UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider orientation="left" orientationMargin="0" dashed plain>Left Text with 0 orientationMargin</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using xiOn UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
            <Divider orientation="right" orientationMargin={50} plain>Right Text with 50px orientationMargin</Divider>

            <p>
                xiOn UI かわいい , 好き好き大好き。<br/>
                Thank you for using xiOn UI, which is a かわいい cherry white quadratic component for quickly building network projects
            </p>
        </>
    )
}

storiesOf('Divider Component',module)
    .add('基本使用',DividerBase)
    .add('带文字的分割线',DividerWithText)
    .add('垂直分割线',DividerVertical)
    .add('分割文字使用正文样式',DividerPlain)