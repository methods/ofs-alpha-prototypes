import React from  'react';
import './styles.scss';
import LikeShare from '../LikeShare';

export default (props) => {
  return (
    <div className="ofs-page-header">
        <div className="ofs-width-container">
            <div className="ofs-grid-row">
                <div className="ofs-grid-column-three-quarters">
                    <div className="ofs-page-header__title">
                      <div className="ofs-page-header__title-image" ><img src={props.imgUrl} alt="" /></div>
                      <div className="ofs-page-header__title-label"><h2 className="ofs-heading-l">{props.title}</h2></div>
                    </div>
                </div>
                <div className="ofs-grid-column-one-quarter">
                    <div className="ofs-page-header__like-share">
                        <LikeShare />
                    </div>
                </div>
            </div>
            <div className="ofs-grid-row">
                <div className="ofs-grid-column-full">
                    <div className="ofs-body ofs-!-font-weight-bold">
                      {props.content}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
