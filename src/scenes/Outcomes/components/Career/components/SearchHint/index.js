import React from 'react';
import './styles.scss';

export default (props) => {
  return (
      <div className="ofs-search-hint">
          <h3 className="ofs-heading-s"><img className="ofs-search-hint__image" src="/assets/icons/magnifying-glass.png" alt=""/>When you search...</h3>
            <p className="ofs-body-s ofs-!-font-weight-bold">{props.hint}</p>
      </div>
  )
}
