import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import Button from "./button";

const www = 'http://www.baidu.com';
const styles:React.CSSProperties={
    textAlign:'center',
}
const CenterDecorator=(storyFn:any)=><div style={styles}>{storyFn()}</div>

const ButtonType=()=>{
    return (
        <>
            <Button btnType='default'>Default Button</Button>
            <Button btnType='primary'>Primary Button</Button>
            <Button btnType='link' href={www}>Link Button</Button>
            <Button btnType='dashed'>Dashed Button</Button>
            <Button btnType='danger'>Danger Button</Button>
        </>
    )
}

const ButtonSize=()=>{
    return(
        <>
            <Button size='sm'>Small Button</Button>
            <Button size='md'>Middle Button</Button>
            <Button size='lg'>Large Button</Button>
        </>
    )
}

const ButtonDisabled=()=>{
    return(
        <>
            <Button btnType='default'>Default Button</Button>
            <Button disabled btnType='default' >Disabled Default Button</Button>
            <br/><br/>

            <Button btnType='primary'>Primary Button</Button>
            <Button disabled btnType='primary'>Disabled Primary Button</Button>
            <br/><br/>

            <Button btnType='link' href={www}>Link Button</Button>
            <Button disabled btnType='link' href={www}>Disabled Link Button</Button>
            <br/><br/>

            <Button btnType='dashed'>Dashed Button</Button>
            <Button disabled btnType='dashed'>Disabled Dashed Button</Button>
            <br/><br/>

            <Button btnType='danger'>Danger Button</Button>
            <Button disabled btnType='danger'>Disabled Danger Button</Button>
        </>
    )
}

const ButtonShape=()=>{
    return(
        <>
            <Button btnType='primary' shape='default'>Default Shape Button</Button>
            <Button btnType='primary' shape='round'>Round Shape Button</Button>
            <Button btnType='primary' shape='circle'>Circle Shape Button</Button>
        </>
    )
}

const ButtonGhost=()=>{
    return(
        <>
            <div style={{backgroundColor:'#f9cce2'}}>
                <Button ghost>Ghost Button</Button>
                <Button disabled ghost>Disable Ghost Button</Button>
                <Button btnType='primary' ghost>Ghost Primary Button</Button>
                <Button btnType='danger' ghost>Ghost Danger Button</Button>
            </div>
        </>
    )
}

const ButtonBlock=()=>{
    return(
        <>
            <div style={{width:'500px'}}>
                <Button block onClick={()=>action('clicked')}>Block Button</Button>
            </div>
        </>

    )
}

storiesOf('Button Component',module)
    .add('按钮类型', ButtonType,{
        info:{
            text:'Button共具有5种类型，分别为default(默认无样式),primary(主题色),link(链接),dashed(虚线边框),danger(危险按钮)'
        }
    })
    .add('按钮尺寸',ButtonSize)
    .add('不可用状态',ButtonDisabled)
    .add('按钮边框',ButtonShape)
    .add('幽灵按钮',ButtonGhost)
    .add('block属性',ButtonBlock)







