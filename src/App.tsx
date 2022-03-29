import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import TMenu from './pages/menu/TMenu';
import THead from './pages/head/THead';
import Toolbar from "./pages/components/toolbar/Toolbar";
import TFooter from "./pages/components/footer/Footer";
import {List, Empty, Space, Avatar} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


// @ts-ignore
const IconText = ({ icon, text}) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

function App() {

    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            href: 'https://ant.design',
            title: `ant design part ${i}`,
            avatar: 'https://joeschmoe.io/api/v1/random',
            description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content:
                'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
    }

    return (
    <div className="App">
      <header className="App-header">
        <THead/>
      </header>
      <div className="App-center">
          <TMenu/>
          <div className="App-content" style={{width: '90vw'}}>
              <Toolbar/>
              <div className="App-fragment">
                  {/*<Empty style={{marginTop: '30vh'}}/>*/}
                  <div
                      id="scrollableDiv"
                      style={{
                          height: 630,
                          overflow: 'auto',
                          padding: '16px',
                         // border: '1px solid rgba(140, 140, 140, 0.35)',
                      }}
                     >
                  <List
                      itemLayout="vertical"
                      size="large"
                      pagination={{
                          onChange: page => {
                              console.log(page);
                          },
                          pageSize: 5,
                      }}
                      dataSource={listData}
                      footer={
                          <div>
                              <b>ant design</b> footer part
                          </div>
                      }
                      renderItem={item => (
                          <List.Item
                              key={item.title}
                              actions={[
                                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                              ]}
                              extra={
                                  <img
                                      width={272}
                                      alt="logo"
                                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                  />
                              }
                          >
                              <List.Item.Meta
                                  avatar={<Avatar src={item.avatar} />}
                                  title={<a href={item.href}>{item.title}</a>}
                                  description={item.description}
                              />
                              {item.content}
                          </List.Item>
                      )}
                  />
              </div>
                </div>
              <TFooter/>
          </div>
      </div>
    </div>
  );
}

export default App;
