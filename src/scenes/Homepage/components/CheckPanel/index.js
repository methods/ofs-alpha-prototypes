import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export default (props) => {
    const bookSrc = 'assets/icons/readlater.png'

    return (
        <div className="check-panel">
            <div className="ofs-width-container">
                <div className="check-panel__title-row">
                    <div className="check-panel__icon"><img src={props.imgUrl} /></div>
                    <div className="check-panel__title"><h4 className="ofs-heading-s check-panel__title-label">{props.title}</h4></div>
                </div>
                <p className="ofs-body-s">
                    {props.bodyText}
                </p>
                <div className="check-panel__read-article"><Link className="ofs-link" to={props.url}>Read article</Link></div>
                <div className="check-panel__save-article">
                    <Link className="ofs-link check-panel__save-article__link" to={props.url}>Save for later</Link>
                    <div className="check-panel__save-article__icon"><img src={bookSrc} /></div>
                </div>
            </div>
        </div>
    )
}