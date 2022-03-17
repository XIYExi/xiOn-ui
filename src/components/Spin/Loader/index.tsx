import React from 'react';
import { ILoadingProp } from '../type';

const Loader: React.FC<ILoadingProp> = ({
                                            text,
                                            visible = true,
                                            textOffset,
                                            textColor,
                                            style,
                                            children,
                                        }) => {
    return visible ? (
        <div className="xiOn-spin-wrap" style={style}>
            {children}
            {!!text && (
                <div
                    className="xiOn-spin-text-tip"
                    style={{ marginTop: `${textOffset}px`, color: textColor }}
                >
                    {' '}
                    {text}{' '}
                </div>
            )}
        </div>
    ) : null;
};

export default Loader;