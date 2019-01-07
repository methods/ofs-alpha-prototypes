import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export default (props) => {
    const item = props.item
    const coursePage = `course/${item._id}`

    return (
        <div className="ofs-search-item">
            <span className="ofs-caption-m">{item.institution.ukprn_name}</span>
            <h3 className="ofs-heading-m ofs-search-item__course-title"><Link to={coursePage}>{item.title.english}</Link></h3>
            <ul className="ofs-list">
                <li className="ofs-body-s">Qualification: {item.qualification.name}</li>
                <li className="ofs-body-s">Study type: {item.mode.label}</li>
            </ul>
        </div>
    )
}