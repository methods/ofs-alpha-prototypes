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

import careerData from './data/career';
import successData from './data/success';
import summaryData from './data/summary';

export default (props) => {

    return (
        <div className="ofs-template__body">

            <Header />

            <PageHeader title="Outcomes" imgUrl="/assets/icons/outcomes.png" content={summaryData.intro} />

            <div className="outcomes-summary">
                <div className="ofs-width-container">
                    <div className="ofs-grid-row">
                        <div className="outcomes-summary__content ofs-grid-column-one-half">
                            <MarkdownContent content={summaryData.paragraph}/>
                            <MarkdownContent content={summaryData.subject} />
                            <ReadMoreLink to="/" label="Read more" />
                        </div>
                        <div className="ofs-grid-column-one-half">
                            <ReadMoreList title="Career related information" links={[]} />
                            <ReadMoreList title="Student success" links={[]} />
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