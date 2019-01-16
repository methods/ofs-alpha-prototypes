import React from 'react'

import './styles.scss'

export default (props) => {
    let label = props.text ? props.text : "back"
    let url = props.url ? props.url : "/"
    return (
        <a href={url} className="ofs-back-link__link ofs-body-s ofs-!-font-weight-bold">
            <img className="ofs-back-link__chevron" src="/assets/icons/left-arrows-blue.png" alt="" />
            {label}
        </a>
    )
}