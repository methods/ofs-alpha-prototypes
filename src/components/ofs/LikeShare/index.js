import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

export default (props) => {
    const likeURL = props.likeURL ? props.likeURL : "/"
    const shareURL = props.shareURL ? props.shareURL : "/"

    return (
        <div className="ofs-like-share">
            <Link className="ofs-link ofs-like-share__like" to={likeURL}>Like</Link>
            <Link className="ofs-link ofs-like-share__share" to={shareURL}>Share</Link>
        </div>
    )
}