import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
    .add('welcome', () => {
        return (
            <>
                <h1>欢迎来到 xiOn-UI 组件库</h1>
                <p>xiOn-UI选用樱花粉白作为主基调，是猛男们最爱的二刺螈主题组件</p>
                <h3>安装试试</h3>
                <code>
                    npm install xiOn-UI --save
                </code>
            </>
        )
    }, { info : { disable: true }})