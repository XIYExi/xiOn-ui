import React, { memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';

const BallBeat = memo(
    ({ text, style, color, textColor, size, visible }: ILoadingProp) => {
        return (
            <Loader text={text} style={style} visible={visible} textColor={textColor}>
                <div className="ball-beat-spin">
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
    );
    },
);

export default BallBeat;