import classnames from 'classnames';
import {CSSProperties, FC} from "react";

/**下划线
 * */
export interface BaseUnderlineProps{

    /*underline-2 | underline-3*/
    type?: boolean | 'type2' | 'type3';

    /* 控制underline和underline-3的颜色 */
    color?: colorType;

    /*控制underline-2的渐变色*/
    presetGradient?: '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8';

    /*控制underline-3的样式种类*/
    under3Mode?: '1'|'2'|'3';

    className?:string;

    style?:CSSProperties;

    [key:string]:any;
}

type themeGradientType = 'primary' | 'orange' | 'red' | 'yellow' | 'indigo' | 'purple' | 'green' | 'teal' | 'pink' | 'cyan';

type colorType = themeGradientType | 'white' | 'sky' | 'leaf';


const Underline:FC<BaseUnderlineProps> = props => {

    const {
        type,
        color,
        presetGradient,
        under3Mode,
        className,
        style,
        children,
        ...restProps
    } = props;

    const classes = classnames('lole-typography',className,{
        [type===true ? 'underline' : `underline-${(type as any).split('type')[1]}`]: type,
        [`${color}`]:color,
        [`gradient-${presetGradient}`]: presetGradient,
        [`style-${under3Mode}`]: under3Mode,
        'typography':true
    })



    return(
        <span className={classes} style={style} {...restProps}>
            {
                children
            }
        </span>
    )
}

Underline.defaultProps={
    under3Mode:'1',
    type:true,

}

export default Underline;
