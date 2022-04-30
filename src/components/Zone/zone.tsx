import React, {CSSProperties, FC} from "react";
import classnames from "classnames";

export interface BaseZoneProps{
    attached?: boolean | 'top' | 'bottom';
    basic?: boolean;
    circular?: boolean;
    className?: string;
    style?: CSSProperties;
    color?: colorType,
    compact?: boolean;
    disabled?: boolean;
    floated?: 'left' | 'right';
    inverted?: boolean;
    padded?: boolean;
    piled?:boolean;
    raised?:boolean;
    size?: 'small'|'large';
    stacked?:boolean;
    textAlign?: textAlignType;
    vertical?: boolean;
    listen?: boolean;
    angle?:zoneAnglePresets;
    [key:string]: any;
}

type zoneAnglePresets =
    'lower-start' |
    'lower-end' |
    'upper-end' |
    'upper-end-lower-end' |
    'upper-end-lower-start' |
    'upper-start'|
    'upper-start-lower-end'|
    'upper-start-lower-start';

type colorType = 'primary'|'indigo'|'purple'|'pink'|'red'|'orange'|'yellow'|'green'|'teal'|'cyan'|'gray'|'black';

type textAlignType = 'left' | 'center' | 'right';

const Zone:FC<BaseZoneProps> = (props) => {

    const {
        attached,
        basic,
        children,
        circular,
        className,
        color,
        compact,
        disabled,
        floated,
        inverted,
        padded,
        piled,
        raised,
        size,
        stacked,
        textAlign,
        vertical,
        style,
        listen,
        angle,
        ...restProps
    } = props

    const classes = classnames('lole-zone',className,{
        [`${color}`]: color,
        [`${size}`]: size,
        'circular': circular,
        'basic': basic,
        'compact': compact,
        'disabled': disabled,
        'inverted':inverted,
        'piled': piled,
        'raised': raised,
        'stacked': stacked,
        'vertical': vertical,
        'padded': padded,
        'listen':listen,
        [`${attached===true ? '' : attached} attached`]: attached,
        [`${textAlign} aligned`]: textAlign,
        [`${floated} floated`]: floated,
        'zone':true,
    })

    /**使用预设渲染
     * */
    if (angle){
        const src = `angle-${angle}`;//封装img的src
        return (
            <div className="lole-zone basic zone">
                <img className="lole-image fluid image" src={`/assets/divider/${src}.jpg`} alt=""/>
                <div className={classnames('img',className)} style={style}>
                    {
                        children
                    }
                </div>
            </div>
        )

    }

    return(
        <div className={classes} style={style} {...restProps}>
            {
                children
            }
        </div>
    )
}

Zone.defaultProps = {
    circular:false,
    basic:false,
    compact:false,
    disabled:false,
    inverted:false,
    piled:false,
    raised:false,
    stacked:false,
    vertical:false,
    padded:false
}

export default Zone;
