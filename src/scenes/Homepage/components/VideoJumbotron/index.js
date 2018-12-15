import React from 'react'
import './styles.scss'
import LikeShare from '../../../../components/ofs/LikeShare';
export default (props) => {
    const videoId = "38nLc4MEZ84"
    const url = `https://www.youtube.com/embed/${videoId}`
    return (
        <div className="video-jumbotron">
            <div className="ofs-width-container">
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-two-thirds">

                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="Choosing the right higher education course" className="video-jumbotron__video embed-responsive-item" src={url}></iframe>
                        </div>
                    </div>
                    <div className="ofs-grid-column-one-third">
                        <div className="video-jumbotron__text">
                            <p className="ofs-body">When you have so many interests for your career choosing the right college course is super tricky! If you have passions, hobbies or just interests.</p>
                            <p className="ofs-body ofs-!-font-weight-bold">In this video students share their advice on how you can focus on the right path for you</p>
                            <div><LikeShare /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}