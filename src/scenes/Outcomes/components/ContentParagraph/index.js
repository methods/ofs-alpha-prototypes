import React from 'react';

export default (props) => {
  return (
    <div className="ofs-content-paragraph">
        <div className="ofs-heading-m">
            {props.title}
        </div>
        <div className="ofs-body-s">
            {props.content}
        </div>
    </div>
  )
}
