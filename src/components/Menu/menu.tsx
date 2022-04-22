import React,{useState, createContext} from "react";
import classNames from 'classnames';
import {MenuItemProps} from "./menuItem";

type MenuMode = 'horizontal' | 'vertical';
type SelectCallBack = (selectedIndex: string)=>void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallBack;
    defaultOpenSubMenus?: string[];
    /*受否按照单元格划分 水平生效，垂直默认打开 */
    celled?:boolean;
}


interface IMenuContext{
    index: string;
    onSelect?: SelectCallBack;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index:'0'});


const Menu: React.FC<MenuProps> = (props) => {

    const {
        className,
        mode,
        style,
        children,
        defaultIndex,
        onSelect,
        defaultOpenSubMenus,
        celled,
    } = props;
    const [currentActive, setActive] = useState(defaultIndex);
    const classes = classNames('lole-menu',className,{
        'celled vertical': mode==='vertical',
        'horizontal': mode!=='vertical',
        'celled':celled,
        'menu':true,
    })
    const handleClick = (index:string)=>{
        setActive(index);
        if (onSelect){
            onSelect(index)
        }
    }
    const passedContext:IMenuContext = {
        index: currentActive?currentActive:'0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus,
    }

    const renderChildren = () => {
        return React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const {displayName} = childElement.type;
            if (displayName === 'MenuItem' || displayName === 'SubMenu'){
                return React.cloneElement(childElement,{
                    index: index.toString()
                });
            }else{
                console.error('Warning: Menu has a child which is not a MenuItem component !');
            }
        })
    }

    return(
        <ul className={classes}
            style={style}
            data-testid='lole-menu'
        >
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps={
    defaultIndex:'0',
    mode:'horizontal',
    defaultOpenSubMenus: [],
}

export default Menu;
