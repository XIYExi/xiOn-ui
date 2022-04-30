import React from "react";
import classNames from "classnames";
import {GlobalReviewContext} from "../GlobalReview/global_review";

export interface DividerProps {
    type?: 'horizontal' | 'vertical';
    svg?:svgMode;
    orientation?: 'left' | 'right' | 'center';
    orientationMargin?: string | number;
    className?: string;
    children?: React.ReactNode;
    dashed?: boolean;
    style?: React.CSSProperties;
    plain?: boolean;
    background?:string;/*svg区块背景*/
    fill?:string;/*svg填充色，应该和页面背景色保持一致*/
}

type svgMode = 'concave' | 'convex' | 'wave1' | 'wave2' | 'wave3';



const Divider: React.FC<DividerProps> = props => {
    const {  direction } = React.useContext(GlobalReviewContext);

    const {
        type = 'horizontal',
        orientation = 'center',
        orientationMargin,
        className,
        children,
        dashed,
        plain,
        svg,
        background = 'rgba(249,204,226,0.2)',
        fill = '#fff',
        ...restProps
    } = props;
    const prefixCls = 'lole-divider';
    const orientationPrefix = orientation.length > 0 ? `${orientation}` : orientation;
    const hasChildren = !!children;
    const hasCustomMarginLeft = orientation === 'left' && orientationMargin != null;
    const hasCustomMarginRight = orientation === 'right' && orientationMargin != null;
    const classString = classNames(
        prefixCls,
        {
            [`${type}`]: type,
            [`dashed`]: !!dashed,
            [`plain`]: !!plain,
            [`text`]: hasChildren,
            [`${orientationPrefix} aligned`]: hasChildren,
            [`${prefixCls}-rtl`]: direction === 'rtl',
            [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft,
            [`${prefixCls}-no-default-orientation-margin-right`]: hasCustomMarginRight,
            'divider':true
        },
        className,
    );

    const innerStyle = {
        ...(hasCustomMarginLeft && { marginLeft: orientationMargin }),
        ...(hasCustomMarginRight && { marginRight: orientationMargin }),
    };


    if (svg){
        return (
            <>
                <div style={{background: `${background}`}}>
                    {
                        children
                    }
                    <div className="lole-divider svg divider">
                        {
                            svg === 'concave' &&
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70">
                                <path fill={`${fill}`} d="M1440,70H0V45.16a5762.49,5762.49,0,0,1,1440,0Z"/>
                            </svg>
                        }
                        {
                            svg === 'convex' &&
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
                                <path fill={`${fill}`} d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"/>
                            </svg>
                        }
                        {
                            svg === 'wave1' &&
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                                <path fill={`${fill}`} d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"/>
                            </svg>
                        }
                        {
                            svg === 'wave2' &&
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 92.26">
                                <path fill={`${fill}`} d="M1206,21.2c-60-5-119-36.92-291-5C772,51.11,768,48.42,708,43.13c-60-5.68-108-29.92-168-30.22-60,.3-147,27.93-207,28.23-60-.3-122-25.94-182-36.91S30,5.93,0,16.2V92.26H1440v-87l-30,5.29C1348.94,22.29,1266,26.19,1206,21.2Z"/>
                            </svg>
                        }
                        {
                            svg === 'wave3' &&
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 1440 100">
                                <path fill={`${fill}`}
                                      d="M1260.2,37.86c-60-10-120-20.07-180-16.76-60,3.71-120,19.77-180,18.47-60-1.71-120-21.78-180-31.82s-120-10-180-1.7c-60,8.73-120,24.79-180,28.5-60,3.31-120-6.73-180-11.74s-120-5-150-5H0V100H1440V49.63C1380.07,57.9,1320.13,47.88,1260.2,37.86Z"/>
                            </svg>
                        }
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className={classString} {...restProps} role="separator">
            {children && (
                <span className='inner' style={innerStyle}>
                    {children}
                </span>
            )}
        </div>
    );
};

export default Divider;
