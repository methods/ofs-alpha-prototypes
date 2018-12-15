import React from 'react'
import Header from '../../components/ofs/Header';
import Footer from '../../components/ofs/Footer';
import PageHeader from '../../components/ofs/PageHeader';
import Jumbotron from '../../components/ofs/Jumbotron';
import MarkdownContent from '../../components/ofs/MarkdownContent';
import ReadMoreLink from '../../components/ofs/ReadMoreLink';
import ReadMoreList from '../../components/ofs/ReadMoreList';
import Career from './components/Career';
import Success from './components/Success';

import summaryData from './data/summary';

export default (props) => {
    const subjectImgUrl = "/assets/icons/subject.png"
    return (
        <div className="ofs-template__body">

            <Header />

            <PageHeader title="Outcomes" imgUrl="/assets/icons/outcomes.png" content={summaryData.intro} />

            <div className="outcomes-summary">
                <div className="ofs-width-container">
                    <div className="ofs-grid-row">
                        <div className="ofs-grid-column-one-half">
                            <div className="outcomes-summary__content">
                                <MarkdownContent content={summaryData.paragraph}/>
                                
                                <div className="outcomes-summary__subject-title">
                                    <h4 className="ofs-heading-s outcomes-summary__subject-title-label"><img className="outcomes-summary__subject-title-image" src={subjectImgUrl} alt=""/> Subject</h4>
                                </div>
                                <p className="ofs-body-s">{summaryData.subject}</p>
                                
                                
                                <ReadMoreLink to="/" label="Read more" />
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