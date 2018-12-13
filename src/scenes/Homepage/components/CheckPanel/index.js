import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export default (props) => {
    
    return (
        <div className="check-panel">
            <div className="ofs-width-container">
                <div className="check-panel__icon"><img src={props.imgUrl} /></div>
                <div className="check-panel__title"><h4 className="ofs-heading-s">{props.title}</h4></div>
                <p className="ofs-body-s">
                    {props.bodyText}
                </p>
                <div className="check-panel__read-article"><Link className="ofs-link" to={props.url}>Read article</Link></div>
                <div className="check-panel__save-article"><Link className="ofs-link" to={props.url}>Save for later</Link></div>

            </div>
        </div>
    )
}