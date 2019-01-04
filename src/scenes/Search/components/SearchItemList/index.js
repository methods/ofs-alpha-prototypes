import React from 'react'

import './styles.scss'
import SearchItem from './components/SearchItem'

export default (props) => {
    const items = props.items

    return (
        <div>
            {items.map(item => <SearchItem item={item} key={item._id} />)}
        </div>
    )
}