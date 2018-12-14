import React from  'react';
import { Link } from 'react-router-dom'
import './styles.scss';

export default (props) => {
  return (<div>
      <Link className="ofs-link ofs-!-font-weight-bold ofs-read-more-link" to={props.to} >{props.label} <img className="ofs-read-more-link__chevrons" src="/assets/icons/right-arrows-blue.png" alt="" /></Link>
  </div>)
}
