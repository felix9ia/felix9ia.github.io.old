import React, { Component } from 'react';
import { CONFIG } from '@/config';
import { Button, Row, Col, Card, Layout, Table, Typography } from 'antd';
import './index.less';

const { Title, Paragraph, Text } = Typography;

class Index extends Component {
  handleIssueClick = issue => {
    this.props.history.push({
      pathname: '/blog',
      query: {},
    });
  };

  render() {
    return (
      <div id="main-area">
        <Title level={2} mark>
          {CONFIG.owner}
        </Title>
        <div>
          <Button type="text" onClick={this.handleIssueClick}>
            我的博客
          </Button>
          <Button type="text" href="#">
            我的简历
          </Button>
          <Button type="text" href="https://space.bilibili.com/130832968">
            我的 BiliBili
          </Button>
        </div>
      </div>
    );
  }
}

export default Index;
