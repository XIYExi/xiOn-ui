import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Spin from "./spin";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Space from "../Space/space";

const list = [
    {
        c: <Spin.BallPulse text='ball-pulse'/>,
        t: `<Spin.BallPulse text="ball-pulse" />`,
    },
    {
        c: <Spin.BallClipRotate text="ball-clip-rotate" />,
        t: `<Spin.BallClipRotate text="ball-clip-rotate" />`,
    },
    {
        c: <Spin.BallScale text="ball-scale" />,
        t: `<Spin.BallScale text="ball-scale" />`,
    },
    {
        c: <Spin.LineScalePulseOut text="line-scale-pulse-out" />,
        t: `<Spin.LineScalePulseOut text="line-scale-pulse-out" />`,
    },
    {
        c: <Spin.LineScale text="line-scale" />,
        t: `<Spin.LineScale text="line-scale" />`,
    },
    {
        c: <Spin.LineScaleParty text="line-scale-party" />,
        t: `<Spin.LineScaleParty text="line-scale-party" />`,
    },
    {
        c: <Spin.BallPulseSync text="ball-pulse-sync" />,
        t: `<Spin.BallPulseSync text="ball-pulse-sync" />`,
    },
    {
        c: <Spin.BallBeat text="ball-beat" />,
        t: `<Spin.BallBeat text="ball-beat" />`,
    },
    {
        c: <Spin.Square text="square-spin" />,
        t: `<Spin.Square text="square-spin" />`,
    },
    {
        c: <Spin.BallSpinFadeLoader text="ball-spin-fade-loader" textOffset={30} />,
        t: `<Spin.BallSpinFadeLoader text="ball-spin-fade-loader" />`,
    },
    {
        c: <Spin.BallScaleMultiple text="ball-scale-multiple" textOffset={30} />,
        t: `<Spin.BallScaleMultiple text="ball-scale-multiple" />`,
    },
    {
        c: <Spin.LineSpinFadeLoader text="line-spin-fade-loader" textOffset={30} />,
        t: `<Spin.LineSpinFadeLoader text="line-spin-fade-loader" />`,
    },
];

const SpinAnimator=()=>{
    return(
        <>
            <div>
                {list.map((v) => {
                    return (
                        <Space>
                            <CopyToClipboard
                                key={v.t}
                                text={v.t}
                                onCopy={() => {
                                    console.log('已复制到剪切板');
                                }}
                            >
                                <div
                                    style={{
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        width: '142px',
                                        height: '100px',
                                    }}
                                >
                                    {v.c}
                                </div>
                            </CopyToClipboard>
                        </Space>
                    );
                })}
            </div>
        </>
    )
}

const SpinColor = () => {
    return(
        <>
            <Spin.Square color='red' text='loading'/>
        </>
    )
}

const SpinText = () => {
    return(
        <>
            <Spin.BallPulse text='自定义文本!'/>
        </>
    )
}

storiesOf('Spin Component',module)
.add('动画组件', SpinAnimator)
.add('颜色',SpinColor)
.add('自定义显示内容',SpinText)