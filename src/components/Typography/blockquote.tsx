/**文本区块
 * */
import classnames from 'classnames';
import React, {CSSProperties, FC} from "react";

export interface BaseBlockquote{
    footer?:boolean;
    footerContent?: React.ReactNode;
    icon?:boolean;
    className?:string;
    style?:CSSProperties;

    /*footer figcaption的控制class属性*/
    footerClass?:string;
}


const Blockquote:FC<BaseBlockquote> = props => {
    const {
        children,
        footer,
        footerContent,
        className,
        style,
        icon,
        footerClass,
        ...restProps
    } = props;

    return(
        <div className="lole-typography figure typography">
            <div className={classnames("lole-typography blockquote typography",className,{
                'icon':icon
            })}
                 style={style}
                 {...restProps}
            >
                {children}
            </div>
            {
                footer &&  <div className={classnames("lole-typography footer figcaption typography",footerClass)}>
                    {footerContent}
                </div>
            }
        </div>
    )
}

export default Blockquote;
