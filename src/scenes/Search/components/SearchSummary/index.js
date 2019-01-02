import React, { Fragment } from 'react'

import './styles.scss'

export default (props) => {
    const count = props.count ? props.count : 0

    return (
        <div className="ofs-search-summary"> 
            <span className="ofs-body ofs-!-font-size-27 ofs-!-font-weight-bold">{count}</span> results found
        </div>
    )
}