import React from 'react'
import Header from '../../../../components/ofs/Header';
import Footer from '../../../../components/ofs/Footer';
import PageHeader from '../../../../components/ofs/PageHeader';
import Jumbotron from '../../../../components/ofs/Jumbotron';
import MarkdownContent from '../../../../components/ofs/MarkdownContent';
import ReadMoreList from '../../../../components/ofs/ReadMoreList';
import Career from './components/Career';
import Success from './components/Success';

import summaryData from './data/summary';

export default (props) => {
    return (
        <div className="ofs-template__body">

            <Header activeLink="/choose-a-course" />

            <PageHeader title="Outcomes" imgUrl="/assets/icons/outcomes.png" />

            <div className="outcomes-summary">
                <div className="ofs-width-container">
                    <div className="ofs-grid-row">
                        <div className="ofs-grid-column-one-half">
                            <div className="outcomes-summary__content">
                                <MarkdownContent content={summaryData.paragraph}/>
                            </div>
                        </div>
                        <div className="ofs-grid-column-one-half">
                            <div className="outcomes-summary__links">
                                <ReadMoreList title={summaryData.lists[0].title} links={summaryData.lists[0].links} />
                                <ReadMoreList title={summaryData.lists[1].title} links={summaryData.lists[1].links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Career />

            <Success />

            <Jumbotron imgUrl="/assets/jumbotron/case-studies.png"  alt="Placeholder for a feature that will let you browse case studies of other students" />

            <Footer />
        </div>
    )
}