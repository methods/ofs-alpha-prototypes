import React from 'react'

import './styles.scss'

export default (props) => {
    const title = "Choose a category"
    const categories = [
        {"title": "Full time", "count": 23},
        {"title": "Part time", "count": 12}
    ]

    function getCategoryDiv(category) {
        return (
            <li key={category.title}>
                <a href="/" className="ofs-link">{category.title} ({category.count})</a>
            </li>
        )
    }

    return (
        <div>
            <label className="ofs-label--s" htmlFor={title}>
                {title}
            </label>
            <ul className="ofs-list" id={title}>
                {categories.map(category => getCategoryDiv(category))}
            </ul>
        </div>
    )
}