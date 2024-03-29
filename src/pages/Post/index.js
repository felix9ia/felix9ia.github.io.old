import React, { Component } from 'react';

import CodeBlock from '@/components/CodeRenderer';
// https://github.com/rexxars/react-markdown-examples
import linkRenderer from '@/components/LinkRenderer';

import { CONFIG } from '@/config';
import toc from 'remark-toc';
import ReactMarkdown from 'react-markdown/with-html';
import { getIssueDetailByNumber } from '@/services/github';
import {
  Typography,
  Card,
  Divider,
  PageHeader,
  Tag,
  Skeleton,
  Button,
} from 'antd';
import './index.less';

const { Title } = Typography;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issueTitle: '',
      isLoading: false,
      detail: null,
      labels: [],
      number: 0,
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });
    await this.getDetail();
    this.setState({ isLoading: false });
  }

  getDetail = async () => {
    const detail = await getIssueDetailByNumber(this.props.match.params.id);
    this.setState({
      detail: detail.body,
      number: detail.number,
      issueTitle: detail.title,
      labels: detail.labels,
    });
  };

  handleBack = () => {
    this.props.history.goBack();
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

  handleClick = () => {
    window.location.href = `https://github.com/${CONFIG.owner}/${CONFIG.repo}/issues/${this.state.number}`;
  };

  render() {
    const content = (
      <ReactMarkdown
        //必须是false不然img标签渲染不出来
        // className="result"
        escapeHtml={false}
        source={this.state.detail}
        renderers={{
          Link: linkRenderer,
          code: CodeBlock,
        }}
        plugins={[toc]}
      />
    );
    return (
      <div
        // className="article"
        className="result-pane"
      >
        <PageHeader
          ghost={false}
          onBack={this.handleBack}
          title={this.state.issueTitle}
          subTitle={this.renderTags()}
        />
        <Card className="content-card">
          {this.renderWithSkeleton(content)}
          <Button block onClick={this.handleClick}>
            点击评论
          </Button>
        </Card>
      </div>
    );
  }
}

export default Post;
