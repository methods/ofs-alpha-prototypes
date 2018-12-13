import React from 'react';
import "./styles.scss"

import Header from '../../components/ofs/Header'
import Footer from '../../components/ofs/Footer'
import VideoJumbotron from './components/VideoJumbotron'
import CheckPanel from './components/CheckPanel'

import data from './data/checks'

export default  (props) => {
    return (
        <div className="ofs-template__body">

            <Header />

            <VideoJumbotron />

            <div className="ofs-width-container">
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-half">
                        <CheckPanel title={data[0].title} imgUrl="assets/icons/subject.png" bodyText={data[0].body} url={data[0].url} />
                    </div>
                    <div className="ofs-grid-column-one-half">
                        <CheckPanel title={data[1].title} imgUrl="assets/icons/howlesson.png" bodyText={data[1].body} url={data[1].url} />
                    </div>
                </div>
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-half">
                        <CheckPanel title={data[2].title} imgUrl="assets/icons/outcomes.png"  bodyText={data[2].body} url={data[2].url} />
                    </div>
                    <div className="ofs-grid-column-one-half">
                        <CheckPanel title={data[3].title} imgUrl="assets/icons/location.png" bodyText={data[3].body} url={data[3].url} />
                    </div>
                </div>
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-half">
                        <CheckPanel title={data[4].title} imgUrl="assets/icons/stusupport.png" bodyText={data[4].body} url={data[4].url} />
                    </div>
                    <div className="ofs-grid-column-one-half">
                        <CheckPanel title={data[5].title} imgUrl="assets/icons/stuview.png" bodyText={data[5].body} url={data[5].url} />
                    </div>
                </div>
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-half">
                        <CheckPanel title={data[6].title} imgUrl="assets/icons/cost.png" bodyText={data[6].body} url={data[6].url} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}