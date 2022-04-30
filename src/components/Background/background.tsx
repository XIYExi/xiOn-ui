import classnames from 'classnames';
import {CSSProperties, FC} from "react";
import {over} from "lodash";

interface BaseBackgroundProps{
    type: 'img' | 'video' | 'dark' | 'color'|'gradient';
    src?:string;
    /*蒙版*/
    overlay?: overlayType;

    /*预设渐变色背景 type为gradient生效*/
    presetGradient?: '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8';

    /*主题渐变色效果 type为gradient生效*/
    themeGradient?: themeGradientType;

    /*颜色背景效果 type为color时生效*/
    colorType?: colorType;

    /*视频缩放 type为video时生效*/
    radioType?: radioType;

    /*视频的封面图片*/
    videoImg?: string;

    /*视频是否循环播放*/
    loop?:boolean;

    className?:string;

    style?:CSSProperties;

    [key:string]:any;
}

type overlayType = boolean| '300' | '400' | 'light-300' | 'light-400' |'light';

type themeGradientType = 'primary' | 'orange' | 'red' | 'yellow' | 'indigo' | 'purple' | 'green' | 'teal' | 'pink' | 'cyan';

type colorType = themeGradientType | 'white' | 'sky' | 'leaf';

type radioType = '1x1' | '4x3' | '16x9' | '21x9';

const Background:FC<BaseBackgroundProps> = (props) => {

    const {
        type,
        src,
        overlay,
        presetGradient,
        themeGradient,
        colorType,
        radioType,
        videoImg,
        loop,
        className,
        style,
        children,
        ...restProps
    } = props;

    const classes = classnames('lole-background',className,{
        [overlay===true?`overlay`:`overlay-${overlay}`]: overlay,
        [`gradient-${presetGradient}`]: presetGradient && type === 'gradient',
        [`${themeGradient}`]: themeGradient && type === 'gradient' && !presetGradient,
        [`${colorType}`]: colorType && type==='color',
        [`ratio ratio-${radioType}`]: radioType && type === 'video',
        [`${type}`]: type,
        'background':true,
    })


    if (type === 'img'){
        return (
            <section className={classes}
                     style={{backgroundImage:`url(${src})`,...style}}
                     {...restProps}
            >
                {
                    children
                }
            </section>
        )
    }

    if (type === 'video'){
        return (
            <section className={classes}
            >
                <video poster={`${videoImg}`}
                       src={`${src}`}
                       autoPlay
                       loop={loop}
                       playsInline
                       muted
                       style={style}
                />
                <div className='container'>
                    {
                        children
                    }
                </div>
            </section>
        )
    }

    return(
        <section className={classes} style={style} {...restProps}>
            {
                children
            }
        </section>
    )
}

export default Background;
