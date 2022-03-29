import React from "react";
import {Alert, Select} from "antd";
import {CodeOutlined} from '@ant-design/icons';
const { Option } = Select;

class Toolbar extends React.Component {


    render() {
        return (
            <div className="App-toolbar">
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