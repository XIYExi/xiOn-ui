import React from "react";


export const Lost:React.FC=()=>{
    return(
        <div>lost</div>
    )
}


/**Menu
 *
 *             <Menu defaultIndex='0'  mode='vertical' defaultOpenSubMenus={['3']}>
 <MenuItem>cool link</MenuItem>
 <MenuItem disabled>cool link 2</MenuItem>
 <MenuItem>cool link 3</MenuItem>
 <SubMenu title='SubMenu'>
 <MenuItem>click me</MenuItem>
 <MenuItem>click me</MenuItem>
 <MenuItem>click me</MenuItem>
 </SubMenu>
 </Menu>

 *
 * */



/**
 * button
 * <div>
 <Button size={ButtonSize.Small} disabled>Disable Default Small Button</Button>
 <Button size={ButtonSize.Middle} btnType={ButtonType.Danger} onClick={(e)=>{console.log(e)}}>Danger Middle Button</Button>

 <Button btnType={ButtonType.Primary} size={ButtonSize.Large} shape={ButtonShape.round}>Primary Round Large Button</Button>

 <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link Button</Button>

 <Button btnType={ButtonType.Link} disabled href='http://www.baidu.com'>Disabled Link Button</Button>

 <Button btnType={ButtonType.Danger} shape={ButtonShape.circle}>Danger Circle Button</Button>
 </div>
 <div>
 <Button btnType={ButtonType.Primary} block>Block Button</Button>
 </div>
 <div>
 <Button btnType={ButtonType.Dashed}>Dashed Button</Button>
 </div>
 <div style={{backgroundColor:'yellow'}}>
 <Button ghost>Ghost Button</Button>
 <Button ghost btnType={ButtonType.Link} href='http://www.baidu.com'>Link Ghost Btn</Button>
 <Button disabled ghost btnType={ButtonType.Dashed}> Disabled Dashed Ghost Button</Button>
 </div>
 */
