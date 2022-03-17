import React, {useState} from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Layout, {Content, Footer, Header} from "./layout";
import Sider from "./sider";
import Menu from "../Menu/menu";
import MenuItem from "../Menu/menuItem";
import Button from "../Button/button";

const HeaderFooter = {
    textAlign: 'center',
    background: 'rgba(rgb(249, 204, 226), 0.4)',
}

const sider = {
    textAlign: 'center',
    background: 'rgb(249,204,226)',
}

const content = {
    textAlign: 'center',
    background: 'rgba(rgb(249,204,226),0.2)',
}

const LayoutBase=()=>{
    return(
        <>
            <Layout>

                <Layout style={{marginBottom:'25px'}}>
                    <Header style={{background: '#f9cce2',}}>Header</Header>
                    <Content style={{height:'15vh'}}>Content</Content>
                    <Footer style={{background: 'rgba(249,204,226,0.5)',}}>Footer</Footer>
                </Layout>

                <Layout style={{marginBottom:'25px'}}>
                    <Header style={{background: '#f9cce2',}}>Header</Header>
                    <Layout>
                        <Sider theme='light'>Sider</Sider>
                        <Content style={{height:'15vh'}}>Content</Content>
                    </Layout>
                    <Footer style={{background: 'rgba(249,204,226,0.5)',}}>Footer</Footer>
                </Layout>

                <Layout style={{marginBottom:'25px'}}>
                    <Header style={{background: '#f9cce2',}}>Header</Header>
                    <Layout>
                        <Content style={{height:'15vh'}}>Content</Content>
                        <Sider theme='light'>Sider</Sider>
                    </Layout>
                    <Footer style={{background: 'rgba(249,204,226,0.5)',}}>Footer</Footer>
                </Layout>

                <Layout style={{marginBottom:'25px'}}>
                    <Sider theme='light'>Sider</Sider>
                    <Layout>
                        <Header style={{background: '#f9cce2',}}>Header</Header>
                        <Content style={{height:'15vh'}}>Content</Content>
                        <Footer style={{background: 'rgba(249,204,226,0.5)',}}>Footer</Footer>
                    </Layout>
                </Layout>

            </Layout>
        </>
    )
}

const Head_Body_Foot = () => {
    return(
        <>
            <Layout style={{height:'100vh'}}>
                <Header>
                    <Menu mode='horizontal'>
                        {new Array(10).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <MenuItem key={key}>{`nav ${key}`}</MenuItem>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{textAlign:'center'}}>
                        <h2>This is Content</h2>
                    </div>
                </Content>
                <Footer style={{textAlign:'center'}}>Designed by Xiye. 16/03/2022</Footer>
            </Layout>
        </>
    )
}

const Head_Sider_Container = () => {
    return(
        <>
            <Layout style={{height:'100vh'}}>
                <Header>
                    <Menu mode='horizontal'>
                        {new Array(10).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <MenuItem key={key}>{`nav ${key}`}</MenuItem>;
                        })}
                    </Menu>
                </Header>
                <Layout>
                    <Sider theme='light'>
                        <Menu mode='vertical'>
                            {new Array(10).fill(null).map((_, index) => {
                                const key = index + 1;
                                return <MenuItem key={key}>{`nav ${key}`}</MenuItem>;
                            })}
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 50px' }}>
                        <div style={{textAlign:'center'}}>
                            <h2>This is Content</h2>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

const Top_Sider = () => {
    return(
        <>
            <Layout style={{height:'100vh'}}>
                <Header>
                    <Menu mode='horizontal'>
                        {new Array(3).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <MenuItem key={key}>{`nav ${key}`}</MenuItem>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', background:'#c0bcbc' }}>
                    <div>
                        <h4>Inner Wrapper</h4>
                    </div>
                    <Layout  style={{ margin: '24px 0' }}>
                        <Sider theme='light'>
                            <Menu mode='vertical'>
                                {new Array(10).fill(null).map((_, index) => {
                                    const key = index + 1;
                                    return <MenuItem key={key}>{`nav ${key}`}</MenuItem>;
                                })}
                            </Menu>
                        </Sider>
                        <Content  style={{ padding: '0 50px' }}>
                            <div style={{textAlign:'center'}}>
                                <h2>This is Content</h2>
                            </div>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center',background:'#c0bcbc' }}>Designed by Xiye. 16/03/2022</Footer>
            </Layout>
        </>
    )
}

const Trigger_sider = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        console.log(collapsed);
        setCollapsed(!collapsed);
    };

    return(
        <Layout style={{height:'100vh'}}>
            <Header>
                <Menu mode='horizontal'>
                    {new Array(10).fill(null).map((_, index) => {
                        const key = index + 1;
                        return <MenuItem key={key}>{`nav ${key}`}</MenuItem>;
                    })}
                </Menu>
            </Header>
            <Layout>
                <Sider theme='light' collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <Menu mode='vertical'>
                        {new Array(10).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <MenuItem key={key}>{`nav ${key}`}</MenuItem>;
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Content  style={{ padding: '0 50px' }}>
                        <div style={{textAlign:'center'}}>
                            <h2>This is Content</h2>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', }}>Designed by Xiye. 16/03/2022</Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}

const DIY_Trigger_Sider = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        console.log(collapsed);
        setCollapsed(!collapsed);
    };

    return(
            <Layout style={{height:'100vh'}}>
                <Header style={{background:'rgba(249,204,226,0.5)'}}>
                    <Button btnType='primary' onClick={onCollapse}> Please Click Me</Button>
                </Header>
                <Layout>
                    <Sider theme='light' trigger={null} collapsible collapsed={collapsed}>
                        <Menu mode='vertical'>
                            {new Array(10).fill(null).map((_, index) => {
                                const key = index + 1;
                                return <MenuItem key={key}>{`nav ${key}`}</MenuItem>;
                            })}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content  style={{ padding: '0 50px' }}>
                            <div style={{textAlign:'center'}}>
                                <h2>This is Content</h2>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center', }}>Designed by Xiye. 16/03/2022</Footer>
                    </Layout>
                </Layout>
            </Layout>
    )
}

const Responsive_Layout = () => {
    return(
        <>
            <Layout style={{height:'100vh'}}>
                <Sider
                    theme='light'
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu mode='vertical'>
                        <MenuItem key="1">
                            nav 1
                        </MenuItem>
                        <MenuItem key="2">
                            nav 2
                        </MenuItem>
                        <MenuItem key="3">
                            nav 3
                        </MenuItem>
                        <MenuItem key="4">
                            nav 4
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background:'rgba(249,204,226,0.5)',padding: 10 }} >
                        <span>
                            <h2 style={{marginLeft: '20px'}}>xiOn</h2>
                        </span>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{textAlign:'center'}}>
                            <h2>This is Content</h2>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Designed by Xiye. 16/03/2022</Footer>
                </Layout>
            </Layout>
        </>
    )
}

const Fixed_Header = () => {
    return(
        <>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu mode="horizontal">
                        <MenuItem key="1">nav 1</MenuItem>
                        <MenuItem key="2">nav 2</MenuItem>
                        <MenuItem key="3">nav 3</MenuItem>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <div style={{ padding: 24, minHeight: 380, textAlign:'center'}}>
                        <h2>
                            This is Content
                        </h2>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Designed by Xiye. 16/03/2022</Footer>
            </Layout>
        </>
    )
}

const Fixed_Sider = () => {
    return(
        <>
            <Layout hasSider>
                <Sider
                    theme='light'
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <Menu mode='vertical'>
                        {new Array(10).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <MenuItem key={key}>{`nav ${key}`}</MenuItem>;
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ padding: 10,background:'rgba(249,204,226,0.5)'}} >
                    <span>
                            <h2 style={{marginLeft: '20px'}}>xiOn</h2>
                        </span>
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, textAlign: 'center' }}>
                            <div style={{textAlign:'center'}}>
                                <h2>----- This is Content -----</h2>
                            </div>
                            {
                                new Array(50).fill(null).map((_,index)=>{
                                    return (
                                        <>
                                            <span>...</span>
                                            <br/>
                                        </>)
                                })
                            }
                            <div style={{textAlign:'center'}}>
                                <h2>----- End -----</h2>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </>
    )
}

storiesOf('Layout Component',module)
    .add('基本使用', LayoutBase)
    .add('上中下布局',Head_Body_Foot)
    .add('顶部-侧边布局-通栏',Head_Sider_Container)
    .add('顶部-侧边布局',Top_Sider)
    .add('侧边布局',Trigger_sider)
    .add('自定义触发器',DIY_Trigger_Sider)
    .add('响应式布局',Responsive_Layout)
    .add('固定头部',Fixed_Header)
    .add('固定侧边栏',Fixed_Sider)