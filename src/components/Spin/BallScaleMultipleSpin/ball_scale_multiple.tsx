import React, { memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';

const BallScaleMultiple =  memo(
    ({
         text,
         style,
         color,
         size,
         textColor,
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
                <div className="ball-scale-multiple-spin">
                    <div style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                    />
                    <div style={{
                            backgroundColor: color,
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                    />
                <div style={{
                        backgroundColor: color,
                        width: `${size}px`,
                        height: `${size}px`,
                    }}
                />
            </div>
        </Loader>
        );
    },
);

export default BallScaleMultiple;
