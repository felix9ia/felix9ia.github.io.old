import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/darcula.css';
hljs.registerLanguage('javascript', javascript);

export class Highlighter extends React.PureComponent {
  componentDidMount() {
    hljs.highlightBlock(this.node);
  }

  render() {
    return (
      <pre ref={node => (this.node = node)}>
        <code className={`language-${this.props.language}`}>
          {this.props.value}
        </code>
      </pre>
    );
  }
}

Highlighter.defaultProps = {
  language: '',
};

Highlighter.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default Highlighter;
