import React, { ReactNode } from 'react';

export interface ILoadingProp {

    /** 动画颜色 */
    color?: string;

    /** 动画元素大小 */
    size?: number;

    /** 动画底部文本*/
    text?: string;

    /** 动画底部文本颜色 */
    textColor?: string;

    /** 动画底部文本距动画的间距 */
    textOffset?: number;

    /** 是否可见 */
    visible?: boolean;

    /** 动画容器样式 */
    style?: React.CSSProperties | undefined;

    children?: ReactNode | Element;
}
