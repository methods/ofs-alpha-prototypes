import React from 'react'
import Jumbotron from '../../components/ofs/Jumbotron';

export default (props) => {

    return (
        <div className="ofs-template__body">

            <Header />

            <PageHeader title="Outcomes" imgUrl="/assets/icons/outcomes.png" content="The reasons you want to study will affect the information that will be important for you when deciding what course to study" />

            <div className="outcomes-summary">
                <div className="ofs-width-container">
                    <div className="ofs-grid-row">
                        <div className="ofs-grid-column-one-half">
                            <MarkdownContent />
                            <ReadMoreLink to="/" />
                        </div>
                        <div className="ofs-grid-column-one-half">
                            <ReadMoreList title="Career related information" links={} />
                            <ReadMoreList title="Student success" links={} />
                        </div>
                    </div>
                </div>
            </div>

            <Jumbotron imgUrl="/assets/jumbotron/case-studies.png"  alt="Placeholder for a feature that will let you browse case studies of other students" />

            <Footer />
        </div>
    )
}