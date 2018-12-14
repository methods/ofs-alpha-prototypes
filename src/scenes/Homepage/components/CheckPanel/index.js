import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

import LikeShare from '../../../../components/ofs/LikeShare'

export default (props) => {

    return (
        <div className="check-panel">
            <div className="ofs-width-container">
                <div className="check-panel__title-row">
                    <div className="check-panel__icon"><img src={props.imgUrl} alt=""/></div>
                    <div className="check-panel__title"><h4 className="ofs-heading-s check-panel__title-label">{props.title}</h4></div>
                </div>
                <p className="ofs-body-s">
                    {props.bodyText}
                </p>
                <div className="check-panel__read-article"><Link className="ofs-link check-panel-link" to={props.url}>Read article</Link></div>
                <div className="check-panel__like-share"><LikeShare /></div>
            </div>
        </div>
    )
}