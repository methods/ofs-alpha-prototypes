import React from 'react';
import './styles.scss';

export default (props) => {
  return (
    <div className="ofs-content-paragraph">
        <div className="ofs-heading-m ofs-content-paragraph__header">
            {props.title}
        </div>
        <div className="ofs-body-s">
            {props.content}
        </div>
    </div>
  )
}
