import React, { Component } from 'react';
import { getIssueDetailByNumber } from '@/services/github';
import { Typography, Card, Divider } from 'antd';

import ReactMarkdown from 'react-markdown';
const { Title } = Typography;
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issueTitle: '',
      detail: null,
    };
  }
  componentWillMount() {
    console.log('lll');
    console.log('this.props.params', this.props.match.params.id);
    this.getDetail();
  }

  getDetail = async () => {
    const detail = await getIssueDetailByNumber(this.props.match.params.id);
    this.setState({ detail: detail.body, issueTitle: detail.title });
  };
  render() {
    return (
      <Card style={{ width: '700px' }}>
        <Title level={2}>{this.state.issueTitle}</Title>
        <Divider />
        <ReactMarkdown source={this.state.detail} />
      </Card>
    );
  }
}

export default Post;
