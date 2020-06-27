import React, { Component } from 'react';
import { Button, Row, Col, Card, Layout, Table, Typography } from 'antd';

class Index extends Component {
  handleIssueClick = issue => {
    this.props.history.push({
      pathname: '/blog',
      query: {},
    });
  };
  render() {
    return (
      <div id="blog">
        <div id="main-area" className="card">
          <Button onClick={this.handleIssueClick}></Button>
        </div>
        <div className="card">catalog</div>
      </div>
    );
  }
}

export default Index;
