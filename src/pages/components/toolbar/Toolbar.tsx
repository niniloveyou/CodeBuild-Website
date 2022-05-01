import React from "react";
import {Alert, Select} from "antd";
import {CodeOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
const { Option } = Select;

const menuUnfold = <MenuUnfoldOutlined style={{ fontSize: '16px', color: '#929CA3' }} />
const menuFold = <MenuFoldOutlined style={{ fontSize: '16px', color: '#929CA3' }} />


class Toolbar extends React.Component {

    // 闭包变量
    state = {
        collapsed: false,
        width: 220
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
            <div className="App-toolbar">

                <div style={{width: 40, marginTop: 10, marginLeft: 15, float: "left"}} onClick={this.toggleCollapsed} >
                    {this.state.collapsed ? menuUnfold: menuFold}
                </div>

                <Select
                    labelInValue
                    defaultValue={{ value: '线上环境' }}
                    style={{width: 120, float: "left", margin: 15}}>
                    <Option value="PROD">线上环境</Option>
                    <Option value="PRE">预发环境</Option>
                    <Option value="QA">QA环境</Option>
                </Select>

                <Alert style={{height: 32, float: "left", margin: 15}} message="show some tips for example app" type="info" />

                <CodeOutlined style={{ float: "right", margin: 15}}/>
            </div>
        );
    }
}

export default Toolbar;