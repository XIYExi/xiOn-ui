import React, { memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';

const BallPulse =  memo(
    ({ text, style, textColor, color, size, visible }: ILoadingProp) => {
        return (
            <Loader text={text} style={style} visible={visible} textColor={textColor}>
            <div className="ball-pulse-spin">
                <div
                    style={{
                        backgroundColor: color,
                        width: `${size}px`,
                        height: `${size}px`,
                    }}
                />
                <div
                    style={{
                        backgroundColor: color,
                        width: `${size}px`,
                        height: `${size}px`,
                    }}
                />
                <div
                    style={{
                        backgroundColor: color,
                        width: `${size}px`,
                        height: `${size}px`,
                    }}
                />
            </div>
        </Loader>
        )
    },
);


export default BallPulse;
