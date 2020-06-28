import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Lowlight from 'react-lowlight';
import shallowCompare from 'react-addons-shallow-compare';
import js from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', js);

class CodeBlock extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Lowlight
        language={this.props.language || 'js'}
        value={this.props.literal}
        inline={this.props.inline}
      />
    );
  }
}

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string,
  inline: PropTypes.bool,
};
export default CodeBlock;
