import { Link } from 'umi';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class LinkRenderer extends Component {
  render() {
    if (this.props.href.match(/^(https?:)?\/\//)) {
      return (
        <a href={this.props.href} target="_blank">
          {this.props.children} <sup>☁</sup>
        </a>
      );
    }

    return <Link to={this.props.href}>{this.props.children}</Link>;
  }
}

LinkRenderer.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

export default LinkRenderer;
