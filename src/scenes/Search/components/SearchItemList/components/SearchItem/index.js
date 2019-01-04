import React from 'react'

import './styles.scss'

export default (props) => {
    const item = props.item
    return (
        <div className="ofs-search-item">
            <span className="ofs-caption-m">{item.institution.name}</span>
            <h3 className="ofs-heading-m ofs-search-item__course-title">{item.title.english}</h3>
            <ul className="ofs-list">
                <li className="ofs-body-s">Qualification: {item.qualification.name}</li>
                <li className="ofs-body-s">Study type: {item.course_mode.label}</li>
            </ul>
        </div>
    )
}