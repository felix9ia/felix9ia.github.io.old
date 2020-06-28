import React, { Component } from 'react';
import {
  Button,
  Row,
  Col,
  Card,
  Layout,
  Table,
  Typography,
  Skeleton,
} from 'antd';
import './index.less';
import { getLabels, getIssuesByLabel } from '@/services/github';

const { Header, Footer, Content } = Layout;
const { Text, Link } = Typography;
const ALL = '所有';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      labels: [],
      issues: [],
      selectedLabelName: null,
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });
    await this.getLabels();
    await this.getIssuesByLabel();
    this.setState({ isLoading: false });
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

  handleTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  renderWithSkeleton = content => {
    return <div>{this.state.isLoading ? <Skeleton active /> : content}</div>;
  };

  renderLabelList = () => {
    const { state } = this;
    const tabList = [
      {
        key: 'tab1',
        tab: '所有分类',
      },
      {
        key: 'tab2',
        tab: '时间线',
      },
    ];

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
    const content = (
      <Table
        pagination={{ pageSize: 20, hideOnSinglePage: true }}
        showHeader={false}
        rowKey={(record, index) => index}
        dataSource={state.labels}
        columns={columns}
      />
    );
    return (
      <Card
        bordered={false}
        tabList={tabList}
        onTabChange={key => {
          this.handleTabChange(key, 'key');
        }}
      >
        {this.renderWithSkeleton(content)}
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
    const content = (
      <Table
        pagination={{ pageSize: 20, hideOnSinglePage: true }}
        showHeader={false}
        rowKey={(record, index) => index}
        dataSource={state.issues}
        columns={columns}
      />
    );
    return (
      <Card bordered={false} title="相关文章">
        {this.renderWithSkeleton(content)}
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
