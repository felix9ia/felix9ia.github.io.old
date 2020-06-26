import React, { Component } from 'react';
import { Link } from 'react-router';
import Tags from '../Tags';
import All from '../All';
import Archive from '../Archive/Archive';

class Archives extends Component {
  render() {
    return (
      <div id="archives">
        <div className="card">
          {/*<Link className="link" to="all">全部</Link>*/}
          {/*<Link className="link" to="archive">归档</Link>*/}
          {/*<Link className="link" to="tags">标签</Link>*/}
        </div>
        <div id="main-area" className="card">
          <All />
        </div>
        <div className="card">
          <Archive />
        </div>
        <div className="card">
          <Tags />
        </div>
      </div>
    );
  }
}

export default Archives;
