import React from 'react';
import './styles.scss';
import Markdown from 'react-markdown';

export default (props) => {
  return (
    <div className="ofs-body">
      <Markdown escapeHtml={true} source={props.content} />
    </div>
  )
}
