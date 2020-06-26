import React, { Component } from 'react';
import { Button, Row, Col, Card, Layout, Table, Typography } from 'antd';
import './index.less';
import { getLabels, getIssuesByLabel } from '@/services/github';

const { Header, Footer, Content } = Layout;
const { Text, Link } = Typography;
const ALL = '所有';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      issues: [],
      selectedLabelName: null,
    };
  }

  componentWillMount() {
    this.getLabels();
    this.getIssuesByLabel();
  }

  getIssuesByLabel = async labelName => {
    const issues = await getIssuesByLabel(labelName);
    this.setState({ issues: issues, selectedLabelName: labelName });
  };

  getLabels = async () => {
    const labels = await getLabels();
    const all = {
      name: ALL,
    };
    labels.unshift(all);
    this.setState({ labels: labels });
  };

  handleSelectLabelClick = async labelName => {
    const name = labelName === ALL ? null : labelName;
    await this.getIssuesByLabel(name);
  };

  handleIssueClick = issue => {
    this.props.history.push({
      pathname: '/post/' + issue.number,
      query: {},
    });
  };

  renderLabelList = () => {
    const { state } = this;
    const columns = [
      {
        dataIndex: 'name',
        key: 'name',
        render: text => (
          <a key={text} onClick={() => this.handleSelectLabelClick(text)}>
            {text}
          </a>
        ),
      },
    ];
    return (
      <Card title="Label 分类" bordered={false}>
        <Table
          pagination={{ pageSize: 20, hideOnSinglePage: true }}
          showHeader={false}
          rowKey="id"
          dataSource={state.labels}
          columns={columns}
        />
      </Card>
    );
  };
  renderIssues = () => {
    const { state } = this;
    const columns = [
      {
        dataIndex: 'title',
        key: 'title',
        render: (text, record) => (
          <Link
            key={text}
            onClick={() => this.handleIssueClick(record)}
            component={Typography.Link}
          >
            {text}
          </Link>
        ),
      },
    ];
    return (
      <Card bordered={false}>
        <Table
          pagination={{ pageSize: 20, hideOnSinglePage: true }}
          showHeader={false}
          rowKey="id"
          dataSource={state.issues}
          columns={columns}
        />
      </Card>
    );
  };

  render() {
    return (
      <div className="container">
        <Row gutter={16}>
          <Col span={16}>{this.renderIssues()}</Col>
          <Col span={8}>{this.renderLabelList()}</Col>
        </Row>
      </div>
    );
  }
}

export default Home;
