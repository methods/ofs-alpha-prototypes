import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "./styles.scss"

import Header from '../../components/ofs/Header'
import Footer from '../../components/ofs/Footer'
import CheckPanel from './components/CheckPanel'

import VideoJumbotron from './components/VideoJumbotron'
import SearchJumbotron from './components/SearchJumbotron'
import CaseStudyJumbotron from './components/CaseStudiesJumbotron'
import QuizJumbotron from './components/QuizJumbotron'

import data from './data/checks'

export default  (props) => {
    return (
        <div className="ofs-template__body">

            <Header />

            <div className="ofs-width-container">
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-full">
                        <h1 className="ofs-heading-l ofs-jumbotron__title">How do I choose a course?</h1>
                    </div>
                </div>
            </div>
            
            <Router>
                <Switch>
                    <Route exact path="/" component={QuizJumbotron} />
                    <Route exact path="/versions/video" component={VideoJumbotron} />
                    <Route exact path="/versions/search" component={SearchJumbotron} />
                    <Route exact path="/versions/quiz" component={QuizJumbotron} />
                    <Route exact path="/versions/case-studies" component={CaseStudyJumbotron} />
                </Switch>
            </Router>

            <div className="ofs-width-container">
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-full">
                        <h2 className="ofs-heading-l ofs-checklist__title">A useful checklist</h2>
                    </div>
                </div>
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-half">
                        <div className="ofs-checklist__left-item">
                            <CheckPanel title={data[0].title} imgUrl={data[0].imageURL} bodyText={data[0].body} url={data[0].url} />
                        </div>
                    </div>
                    <div className="ofs-grid-column-one-half">
                        <div className="ofs-checklist__right-item">
                            <CheckPanel title={data[1].title} imgUrl={data[1].imageURL} bodyText={data[1].body} url={data[1].url} />
                        </div>
                    </div>
                </div>

                <div className="check-list__section-break">
                    <hr className="ofs-section-break ofs-section-break--visible" />
                </div>

                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-half">
                        <div className="ofs-checklist__left-item">
                            <CheckPanel title={data[2].title} imgUrl={data[2].imageURL}  bodyText={data[2].body} url={data[2].url} />
                        </div>
                    </div>
                    <div className="ofs-grid-column-one-half">
                        <div className="ofs-checklist__right-item">
                            <CheckPanel title={data[3].title} imgUrl={data[3].imageURL} bodyText={data[3].body} url={data[3].url} />
                        </div>
                    </div>
                </div>

                <div className="check-list__section-break">
                    <hr className="ofs-section-break ofs-section-break--visible" />
                </div>

                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-half">
                        <div className="ofs-checklist__left-item">
                            <CheckPanel title={data[4].title} imgUrl={data[4].imageURL} bodyText={data[4].body} url={data[4].url} />
                        </div>
                    </div>
                    <div className="ofs-grid-column-one-half">
                        <div className="ofs-checklist__right-item">
                            <CheckPanel title={data[5].title} imgUrl={data[5].imageURL} bodyText={data[5].body} url={data[5].url} />
                        </div>
                    </div>
                </div>
                <div className="check-list__section-break">
                    <hr className="ofs-section-break ofs-section-break--visible" />
                </div>
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-half">
                        <div className="ofs-checklist__left-item">
                            <CheckPanel title={data[6].title} imgUrl={data[6].imageURL} bodyText={data[6].body} url={data[6].url} />
                        </div>
                    </div>
                    <div className="ofs-grid-column-one-half">
                        <div className="ofs-checklist__right-item">
                            <CheckPanel title={data[7].title} imgUrl={data[7].imageURL} bodyText={data[7].body} url={data[7].url} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}