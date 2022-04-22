import React, {CSSProperties, FC} from "react";
import classnames from "classnames";

export interface BaseZoneGroups{
   className?:string;
   style?:CSSProperties;
   compact?:boolean;
   horizontal?:boolean;
   piled?:boolean;
   raised?:boolean;
   size?:'small'| 'medium'| 'large';
   stacked?:boolean;
   [key:string]:any;
}

const ZoneGroup:FC<BaseZoneGroups> = (props) => {

    const {
        children,
        style,
        className,
        compact,
        horizontal,
        piled,
        raised,
        size,
        stacked,
        ...restProps
    } = props;

    const classes = classnames('lole-zone',className,{
        [`${size}`]:size,
        'compact':compact,
        'horizontal':horizontal,
        'piled':piled,
        'raised':raised,
        'stacked':stacked,
        'zones':true
    })

    return(
        <div className={classes} style={style} {...restProps}>
            {
                children
            }
        </div>
    )
}

ZoneGroup.defaultProps = {
    size:'medium',
    compact: false,
    horizontal: false,
    piled: false,
    raised: false,
    stacked: false
}


export default ZoneGroup;


