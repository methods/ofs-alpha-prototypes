import React from 'react'

import './styles.scss'

export default (props) => {
    const title = "Choose a category"
    const listTitle = "All categories"
    const categories = [
        {"title": "Full time", "count": 23},
        {"title": "Part time", "count": 12}
    ]

    function getCategoryDiv(category) {
        return (
            <li>
                <a href="/">{category.title} ({category.count})</a>
            </li>
        )
    }

    return (
        <div>
            <span className="ofs-body-s ofs-!-font-weight-bold ofs-list-filter-title">{title}</span>
            <ul className="ofs-list">
                {categories.map(category => getCategoryDiv(category))}
            </ul>
        </div>
    )
}