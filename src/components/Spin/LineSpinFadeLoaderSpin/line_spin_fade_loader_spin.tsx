import React, { memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';

const LineSpinFadeLoader =  memo(
    ({
         text,
         style,
         color,
         textColor,
         size = 5,
         textOffset,
         visible,
     }: ILoadingProp) => {
        return (
            <Loader
                text={text}
                style={style}
                visible={visible}
                textOffset={textOffset}
                textColor={textColor}
            >
                <div className="line-spin-fade-loader">
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 3}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 3}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 3}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 3}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 3}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 3}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 3}px`,
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size * 3}px`,
                        }}
                    />
                </div>
            </Loader>
        );
    },
);

export default LineSpinFadeLoader;
