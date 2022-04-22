import React, {FunctionComponentElement, useContext, useState} from "react";
import classNames from 'classnames';
import {MenuContext} from "./menu";
import {MenuItemProps} from "./menuItem";
import {CSSTransition} from "react-transition-group";
import Icon from "../Icon/icon";
import Animator from "../Animator/animator";



export interface SubMenuProps{
    index?: string;
    title: string;
    className?:string;
}

const SubMenu:React.FC<SubMenuProps> = ({index,title,children,className}) => {


    const context = useContext(MenuContext);
    const openSubMenus = context.defaultOpenSubMenus as Array<string>;
    const isOpened = (index && context.mode==='vertical') ? openSubMenus.includes(index) : false;
    const [menuOpen, setOpen] = useState(isOpened);

    const classes = classNames('item submenu',className,{
        'active': context.index===index,
        'is-opened': menuOpen,
        'is-vertical': context.mode==='vertical',
    })

    const handleClick = (e:React.MouseEvent) => {
        e.preventDefault();
        setOpen(!menuOpen);
    }

    /**
     * 鼠标移入 hover打开计时
     */
    let timer:any;
    const handleMouse = (e:React.MouseEvent,toggle:boolean) => {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(()=>{
            setOpen(toggle);
        },200);
    }

    const clickEvents = context.mode === 'vertical' ? {onClick: handleClick}:{};
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter:(e:React.MouseEvent)=>{handleMouse(e,true);},
        onMouseLeave:(e:React.MouseEvent)=>{handleMouse(e,false);}
    }:{};


    const renderChildren = () => {
        const subMenuClasses = classNames('lole-submenu',{
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children,(child,i)=>{
            const childElement = child as FunctionComponentElement<MenuItemProps>;
            if (childElement.type.displayName==='MenuItem'){
                return React.cloneElement(childElement,{
                    index:`${index}-${i}`
                })
            }
            else{
                console.error('Warning: SubMenu has a child which is not a MenuItem component !');
            }
        })
        return(
            <Animator in={menuOpen}
                      timeout={300}
                      animation='zoom-in-top'
            >
                <ul className={subMenuClasses}>{childrenComponent}</ul>
            </Animator>
        )
    }

    return(
        <li key={index}
            className={classes}
            {...hoverEvents}
        >
            <div className='label' {...clickEvents}>{title}
                <Icon icon='angle-down' className='arrow-icon'/>
            </div>
            {renderChildren()}
        </li>
    )

}

SubMenu.displayName = 'SubMenu';

export default SubMenu;
