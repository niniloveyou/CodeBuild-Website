import React from "react";
import {Avatar, Input, Popover} from "antd";
import { UserOutlined, BellOutlined, AntDesignOutlined} from '@ant-design/icons';

const { Search } = Input;


class THead extends React.Component {

    state = {
        clicked: false
    };

    hide = () => {
        this.setState({
            clicked: false
        });
    };

    // handleClickChange = visible => {
    //     this.setState({
    //         clicked: visible
    //     });
    // };


    onSearch = (value: any) => console.log(value);

    onPopMenu = () => {
        this.setState({
            clicked: true
        });
    }

    render() {
        const clickContent = <div>This is click content.</div>;

        return (
            <div>
                <Avatar size = {25} style={{margin: 12, float: "right"}} icon={<UserOutlined />}/>
                <BellOutlined style={{margin: 15, marginLeft: 7, marginRight: 7, float: "right", color: 'white', fontSize: 20}} />
                <text style={{margin: 10, marginTop: 15, float: "right", color: 'white', fontSize: 14}} >李子 · Android组</text>
                <Search style={{width: 200, margin: 10, float: "right", backgroundColor: 'blue'}} placeholder="请输入关键词搜索" onSearch={this.onSearch} />
                <div onClick={() => this.onPopMenu}>
                    <AntDesignOutlined style={{margin: 15, marginRight: 0, float: "left", color: 'white', fontSize: 20, cursor: "pointer"}} />
                    <text style={{margin: 10, marginTop: 14, float: "left", color: 'white', fontSize: 15}} >小李子学习</text>
                </div>

                {/*左上角悬浮*/}
                <Popover
                    style={{ width: 500 }}
                    content={clickContent}
                    title="click title"
                    trigger="click"
                    visible={this.state.clicked}
                   // onVisibleChange={this.handleClickChange}
                />
            </div>


        );
    }
}

export default THead;