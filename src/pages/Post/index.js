import React, { Component } from 'react';
import { getIssueDetailByNumber } from '@/services/github';
import { Typography, Card, Divider, PageHeader, Tag, Skeleton } from 'antd';

import ReactMarkdown from 'react-markdown';

const { Title } = Typography;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issueTitle: '',
      isLoading: false,
      detail: null,
      labels: [],
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });
    await this.getDetail();
    this.setState({ isLoading: false });
  }

  handleBack = () => {
    this.props.history.goBack();
  };

  getDetail = async () => {
    const detail = await getIssueDetailByNumber(this.props.match.params.id);
    this.setState({
      detail: detail.body,
      issueTitle: detail.title,
      labels: detail.labels,
    });
  };

  renderWithSkeleton = content => {
    return <div>{this.state.isLoading ? <Skeleton active /> : content}</div>;
  };

  renderTags = () => {
    const { labels } = this.state;
    return (
      <div>
        {labels.map(label => {
          return <Tag color="cyan">{label.name}</Tag>;
        })}
      </div>
    );
  };

  render() {
    const content = <ReactMarkdown source={this.state.detail} />;
    return (
      <div>
        <PageHeader
          ghost={false}
          onBack={this.handleBack}
          title={this.state.issueTitle}
          subTitle={this.renderTags()}
        />
        <Card style={{ width: '700px' }}>
          {this.renderWithSkeleton(content)}
        </Card>
      </div>
    );
  }
}

export default Post;
