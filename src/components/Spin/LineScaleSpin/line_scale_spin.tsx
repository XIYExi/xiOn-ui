import React, { memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';

const LineScale = memo(
    ({ text, style, color, textColor, size = 4, visible }: ILoadingProp) => {
        return (
            <Loader text={text} style={style} visible={visible} textColor={textColor}>
                <div className="line-scale">
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 9}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 9}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 9}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 9}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 9}px`,
                        }}
                    />
                </div>
            </Loader>
        );
    },
);

export default LineScale;
