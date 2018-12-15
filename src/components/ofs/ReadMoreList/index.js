import React from  'react';
import ReadMoreLink from '../ReadMoreLink';
import './styles.scss'

export default (props) => {

  function getReadMoreLink(link) {
    return(
        <li key={link.label}>
          <ReadMoreLink to={link.url} label={link.label} />    
        </li>
    )
  }

  return (
    <div className="ofs-read-more-list">
        <h2 className="ofs-read-more-list__title ofs-heading-m">{props.title}</h2>
        <ul className="ofs-list">
          {props.links.map(link => getReadMoreLink(link))}
        </ul>
    </div>
    )
}
