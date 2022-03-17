import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const MenuType=()=>{
    return(
        <>
            <Menu defaultIndex='0'>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem disabled>Disabled Item</MenuItem>
                <SubMenu title='SubMenu'>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem disabled>Disabled Item</MenuItem>
                </SubMenu>
            </Menu>
        </>
    )
}

const MenuMode=()=>{
    return(
        <>
            <Menu mode='vertical'>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem disabled>Disabled Item</MenuItem>
                <SubMenu title='Vertical SubMenu'>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem disabled>Disabled Item</MenuItem>
                </SubMenu>
            </Menu>
        </>
    )
}

const MenuOpen=()=>{
    return(
        <>
            <Menu mode='vertical' defaultOpenSubMenus={['1']}>
                <MenuItem>Menu Item</MenuItem>
                <SubMenu title='SubMenu' >
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item</MenuItem>
                </SubMenu>
            </Menu>
        </>
    )
}

storiesOf('Menu Component',module)
    .add('菜单类型',MenuType)
    .add('垂直菜单',MenuMode)
    .add('垂直菜单展开子项',MenuOpen)