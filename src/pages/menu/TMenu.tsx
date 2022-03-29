import React from 'react';
import { Menu } from 'antd';
import './TMenu.css';

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const {SubMenu} = Menu;
const menuUnfold = <MenuUnfoldOutlined style={{ fontSize: '16px', color: '#929CA3' }} />
const menuFold = <MenuFoldOutlined style={{ fontSize: '16px', color: '#929CA3' }} />

class TMenu extends React.Component {

    // 闭包变量
    state = {
        collapsed: false,
        width: 256
    };

    // 方法实例变量
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            width: this.state.collapsed ? 220 : 60
        });
    };

    render() {
        return (
            <div style={{width: this.state.width, backgroundColor: '#001528'}}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    style={{width: this.state.width, height: '88vh'}}
                    inlineCollapsed={this.state.collapsed}>

                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined/>}>
                        Option 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<PieChartOutlined/>}>
                        Option 4
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>

                <div style={{width: 60, marginBottom: 16, backgroundColor: '#001528'}} onClick={this.toggleCollapsed} >
                    {this.state.collapsed ? menuUnfold: menuFold}
                </div>
            </div>
        );
    }
}

export default TMenu;
