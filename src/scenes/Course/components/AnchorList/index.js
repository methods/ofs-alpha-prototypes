import React from 'react';
import "./styles.scss"

export default (props) => {
    const list = props.list ? props.list : []
    const selected = props.selected ? props.selected : ""

    function anchorDiv(anchor) {
        if (anchor.label === selected) {
            return (
                <li className="ofs-anchor-list__item--selected" key={anchor.label}>
                    <span className="ofs-body">{anchor.label}</span>
                </li>
            )
        } else {
            return (
                <li className="ofs-anchor-list__item" key={anchor.label}>
                    <a className="ofs-anchor-list__link ofs-body" href={anchor.to}>{anchor.label}</a>
                    <img className="ofs-anchor-list__link__icon" src="/assets/icons/right-arrows-black.png" alt="" />
                </li>
            )
        }
    }

    return (
        <ul className="ofs-list">
            {list.map(anchor => anchorDiv(anchor))}
        </ul>
    )
}