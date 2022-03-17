import React from "react";

export type DirectionType = 'ltr' | 'rtl' | undefined;
export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface GlobalReviewProps{

    prefixCls?: string;

    children?: React.ReactNode;

    direction?: DirectionType;

    space?: {
        size?: SizeType | number;
    };

}

export const GlobalReviewContext =React.createContext<GlobalReviewProps>({
})