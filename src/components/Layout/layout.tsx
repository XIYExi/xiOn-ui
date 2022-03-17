import React, {createContext, HTMLAttributes} from "react";
import classNames from "classnames";

export type LayoutTargetName = 'header'|'footer'|'main'|'section';

export interface GeneratorProps {
    suffixCls: string;
    tagName: LayoutTargetName;
    displayName: string;
}

export interface BasicProps extends HTMLAttributes<HTMLDivElement>{
    prefixCls?: string;
    hasSider?: boolean;
}

export interface LayoutContextProps {
    siderHook: {
        addSider: (id: string) => void;
        removeSider: (id: string) => void;
    };
}

export const LayoutContext = createContext<LayoutContextProps>({
    siderHook: {
        addSider: () => null,
        removeSider: () => null,
    }
})

interface BasicPropsWithTagName extends BasicProps{
    tagName: LayoutTargetName;
}

function generator({suffixCls, tagName, displayName}:GeneratorProps){
    return (BasicComponent: any) => {
        const Adapter: React.FC<BasicProps> = props => {
            const name = `xiOn-${suffixCls}`;

            return <BasicComponent prefixCls={name} tagName={tagName} {...props} />;
        }
        Adapter.displayName = displayName;
        return Adapter;
    }
}

const Basic = (props: BasicPropsWithTagName) => {
    const {
        prefixCls,
        className,
        children,
        tagName,
        ...others } = props;

    const classString = classNames(prefixCls, className);
    return React.createElement(tagName, { className: classString, ...others }, children);
};

const BasicLayout: React.FC<BasicPropsWithTagName> = props => {

    const [siders, setSiders] = React.useState<string[]>([]);

    const {
        prefixCls,
        className,
        children,
        hasSider,
        tagName: Tag,
        ...others
    } = props;

    const classString = classNames(
        prefixCls,
        {
            [`${prefixCls}-has-sider`]: typeof hasSider === 'boolean' ? hasSider : siders.length > 0,
        },
        className,
    );

    const contextValue = React.useMemo(
        () => ({
            siderHook: {
                addSider: (id: string) => {
                    setSiders(prev => [...prev, id]);
                },
                removeSider: (id: string) => {
                    setSiders(prev => prev.filter(currentId => currentId !== id));
                },
            },
        }),
        [],
    );

    return (
        <LayoutContext.Provider value={contextValue}>
            <Tag className={classString} {...others}>
                {children}
            </Tag>
        </LayoutContext.Provider>
    );
};

const Layout = generator({
    suffixCls: 'layout',
    tagName: 'section',
    displayName: 'Layout',
})(BasicLayout);

const Header = generator({
    suffixCls: 'layout-header',
    tagName: 'header',
    displayName: 'Header',
})(Basic);

const Footer = generator({
    suffixCls: 'layout-footer',
    tagName: 'footer',
    displayName: 'Footer',
})(Basic);

const Content = generator({
    suffixCls: 'layout-content',
    tagName: 'main',
    displayName: 'Content',
})(Basic);

export { Header, Footer, Content };

export default Layout;









