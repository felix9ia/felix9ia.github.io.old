import { IRouteComponentProps } from 'umi';
import { Layout, Breadcrumb } from 'antd';
import React from 'react';
const { Header, Footer, Content } = Layout;

export default function({ children, location, route, history, match }) {
  const a = location.pathname;
  return (
    <Layout>
      <Header
        className=""
        style={{ backgroundColor: '#fff', marginBottom: '10px' }}
      >
        <Breadcrumb style={{ lineHeight: '64px' }}>
          <Breadcrumb.Item>
            <a href="/">felix9ia</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Content style={{ minHeight: '1000px', margin: '0 auto' }}>
        {children}
      </Content>
    </Layout>
  );
}
