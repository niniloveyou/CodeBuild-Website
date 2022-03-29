import React from "react";
import {Alert, Select} from "antd";
import {CodeOutlined, CopyrightOutlined, GithubOutlined} from '@ant-design/icons';
import GlobalFooter from "./index";
const { Option } = Select;


// footer copyright
const links = [{
    key: '帮助',
    title: '帮助',
    href: '',
}, {
    key: 'github',
    title: <GithubOutlined type="github" />,
    href: 'https://github.com/ant-design/ant-design-pro',
    blankTarget: true,
}, {
    key: '条款',
    title: '条款',
    href: '',
    blankTarget: true,
}];
const copyright = <div>Copyright <CopyrightOutlined type="copyright" /> 2017 蚂蚁金服体验技术部出品</div>;


class TFooter extends React.Component {


    render() {
        return (
            <div className="App-footer">
                <GlobalFooter links={links} copyright={copyright} />
            </div>
        );
    }
}

export default TFooter;