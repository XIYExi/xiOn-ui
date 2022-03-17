import React, {
    Context,
    createContext,
    forwardRef,
    HTMLAttributes,
    useContext,
    useEffect,
    useRef,
    useState
} from "react";
import classNames from "classnames";
import omit from 'rc-util/lib/omit';

import {LayoutContext} from "./layout";
import Icon from "../Icon/icon";
import isNumeric from "../utils/isNumeric";

const dimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
};

export interface SiderContextProps{
    siderCollapsed?: boolean;
}

export const SiderContext: Context<SiderContextProps> = createContext({});

export type CollapseType = 'clickTrigger' | 'responsive';

export type SiderTheme = 'light' | 'dark';

export type BreakPointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface SiderProps extends HTMLAttributes<HTMLDivElement> {

    /** 前缀 */
    prefixCls?: string;

    /** 是否可关闭 */
    collapsible?: boolean;

    /** 是否为关闭状态 */
    collapsed?: boolean;

    /** 默认状态 */
    defaultCollapsed?: boolean;

    /** 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用 */
    reverseArrow?: boolean;

    /** 展开-收起时的回调函数 */
    onCollapse?: (collapsed: boolean, type: CollapseType) => void;

    /** 指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式 */
    zeroWidthTriggerStyle?: React.CSSProperties;

    /** 自定义 trigger，设置为 null 时隐藏 trigger */
    trigger?: React.ReactNode;

    /** 宽度 */
    width?: number | string;

    /** 收缩宽度，设置为 0 会出现特殊 trigger */
    collapsedWidth?: number | string;

    /** 相应式布局断点 */
    breakpoint?: BreakPointType;

    /** 主题颜色 */
    theme?: SiderTheme;

    /** 触发断点的回调 */
    onBreakpoint?: (broken: boolean) => void;
}

export interface SiderState{
    collapsed?: boolean;
    below: boolean;
}

const generateId = (() => {
    let i = 0;
    return (prefix: string = '') => {
        i += 1;
        return `${prefix}${i}`;
    };
})();


const Sider = React.forwardRef<HTMLDivElement, SiderProps>(
    (
        {
            prefixCls: customizePrefixCls,
            className,
            trigger,
            children,
            defaultCollapsed = false,
            theme = 'dark',
            style = {},
            collapsible = false,
            reverseArrow = false,
            width = 200,
            collapsedWidth = 80,
            zeroWidthTriggerStyle,
            breakpoint,
            onCollapse,
            onBreakpoint,
            ...props
        },
        ref,
    ) => {
        const { siderHook } = useContext(LayoutContext);

        const [collapsed, setCollapsed] = useState(
            'collapsed' in props ? props.collapsed : defaultCollapsed,
        );
        const [below, setBelow] = useState(false);

        useEffect(() => {
            if ('collapsed' in props) {
                setCollapsed(props.collapsed);
            }
        }, [props.collapsed]);

        const handleSetCollapsed = (value: boolean, type: CollapseType) => {
            if (!('collapsed' in props)) {
                setCollapsed(value);
            }
            onCollapse?.(value, type);
        };

        // ========================= Responsive =========================
        const responsiveHandlerRef = useRef<(mql: MediaQueryListEvent | MediaQueryList) => void>();
        responsiveHandlerRef.current = (mql: MediaQueryListEvent | MediaQueryList) => {
            setBelow(mql.matches);
            onBreakpoint?.(mql.matches);

            if (collapsed !== mql.matches) {
                handleSetCollapsed(mql.matches, 'responsive');
            }
        };

        useEffect(() => {
            function responsiveHandler(mql: MediaQueryListEvent | MediaQueryList) {
                return responsiveHandlerRef.current!(mql);
            }

            let mql: MediaQueryList;
            if (typeof window !== 'undefined') {
                const { matchMedia } = window;
                if (matchMedia! && breakpoint && breakpoint in dimensionMaxMap) {
                    mql = matchMedia(`(max-width: ${dimensionMaxMap[breakpoint]})`);
                    try {
                        mql.addEventListener('change', responsiveHandler);
                    } catch (error) {
                        mql.addListener(responsiveHandler);
                    }
                    responsiveHandler(mql);
                }
            }
            return () => {
                try {
                    mql?.removeEventListener('change', responsiveHandler);
                } catch (error) {
                    mql?.removeListener(responsiveHandler);
                }
            };
        }, [breakpoint]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.

        useEffect(() => {
            const uniqueId = generateId('xiOn-sider-');
            siderHook.addSider(uniqueId);
            return () => siderHook.removeSider(uniqueId);
        }, []);

        const toggle = () => {
            handleSetCollapsed(!collapsed, 'clickTrigger');
        };

        //const { getPrefixCls } = useContext(ConfigContext);

        const renderSider = () => {
            //const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);

            const prefixCls = customizePrefixCls?customizePrefixCls:'xiOn-layout-sider';

            const divProps = omit(props, ['collapsed']);
            const rawWidth = collapsed ? collapsedWidth : width;
            // use "px" as fallback unit for width
            const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
            // special trigger when collapsedWidth == 0
            const zeroWidthTrigger =
                parseFloat(String(collapsedWidth || 0)) === 0 ? (
                    <span
                        onClick={toggle}
                        className={classNames(
                            `${prefixCls}-zero-width-trigger`,
                            `${prefixCls}-zero-width-trigger-${reverseArrow ? 'right' : 'left'}`,
                        )}
                        style={zeroWidthTriggerStyle}
                    >
            {trigger || <Icon icon='search' theme='primary'/>}
          </span>
                ) : null;
            const iconObj = {
                expanded: reverseArrow ? <Icon icon='arrow-right' theme='primary'/> : <Icon icon='arrow-left' theme='primary'/> ,
                collapsed: reverseArrow ? <Icon icon='arrow-left' theme='primary'/> : <Icon icon='arrow-right' theme='primary'/>,
            };
            const status = collapsed ? 'collapsed' : 'expanded';
            const defaultTrigger = iconObj[status];
            const triggerDom =
                trigger !== null
                    ? zeroWidthTrigger || (
                    <div
                        className={`${prefixCls}-trigger`}
                        onClick={toggle}
                        style={{ width: siderWidth }}
                    >
                        {trigger || defaultTrigger}
                    </div>
                )
                    : null;
            const divStyle = {
                ...style,
                flex: `0 0 ${siderWidth}`,
                maxWidth: siderWidth, // Fix width transition bug in IE11
                minWidth: siderWidth, // https://github.com/ant-design/ant-design/issues/6349
                width: siderWidth,
            };
            const siderCls = classNames(
                prefixCls,
                `${prefixCls}-${theme}`,
                {
                    [`${prefixCls}-collapsed`]: !!collapsed,
                    [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
                    [`${prefixCls}-below`]: below,
                    [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0,
                },
                className,
            );
            return (
                <aside className={siderCls} {...divProps} style={divStyle} ref={ref}>
                    <div className={`${prefixCls}-children`}>{children}</div>
                    {collapsible || (below && zeroWidthTrigger) ? triggerDom : null}
                </aside>
            );
        };

        const contextValue = React.useMemo(
            () => ({
                siderCollapsed: collapsed,
            }),
            [collapsed],
        );

        return <SiderContext.Provider value={contextValue}>{renderSider()}</SiderContext.Provider>;
    },
);

Sider.displayName = 'Sider';

export default Sider;



