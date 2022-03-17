import React, { memo } from 'react';
import Loader from '../Loader';
import { ILoadingProp } from '../type';

const BallScale = memo(
    ({ text, style, color, textColor, size, visible }: ILoadingProp) => {
        return (
            <Loader text={text} style={style} visible={visible} textColor={textColor}>
                <div className="ball-scale-spin">
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

export default BallScale;
