import React from 'react';
import './styles.scss';
import Markdown from 'react-markdown';

export default (props) => {
  return (
    <div className="ofs-content-paragraph">
        <div className="ofs-heading-m ofs-content-paragraph__header">
            {props.title}
        </div>
        <div className="ofs-body-s">
            <Markdown escapeHtml={true} source={props.content} />
        </div>
    </div>
  )
}
