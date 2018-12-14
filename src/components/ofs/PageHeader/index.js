import React from  'react';
import './styles.scss';

export default (props) => {
  return (
    <div className="ofs-page-header">
        <div className="ofs-width-container">
            <div className="ofs-grid-row">
                <div className="ofs-grid-column-full">
                    <h2 className="ofs-heading-l">{props.title}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
