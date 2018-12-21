import React from 'react';
import Markdown from 'react-markdown';

import './styles.scss';
import successData from '../../data/success';

export default (props) => {

  return (
    <div className="ofs-outcomes__careers-container">
        <div className="ofs-width-container">

            <div className="ofs-grid-row">
            <div className="ofs-grid-column-full">
                <h1 className="ofs-heading-l ofs-success__header">Student success</h1>
                <p className="ofs-body ofs-success__intro">{successData.intro}</p>
            </div>
            </div>
            <div className="ofs-grid-row">
            <div className="ofs-grid-column-one-half">
                <div className="ofs-heading-m ofs-success__paragraph-header">
                    {successData.title}
                </div>
                <div className="ofs-body ofs-success__paragraph"><Markdown escapeHtml={true} source={successData.paragraph1} /></div>
                <div className="ofs-body ofs-success__paragraph"><Markdown escapeHtml={true} source={successData.paragraph2} /></div>
                <div className="ofs-body ofs-success__paragraph"><Markdown escapeHtml={true} source={successData.paragraph3} /></div>
                <div className="ofs-body ofs-success__paragraph"><Markdown escapeHtml={true} source={successData.paragraph4} /></div>
            </div>
            <div className="ofs-grid-column-one-half">
                <img className="ofs-success__image" src="/assets/images/outcomes-success.png" alt="Learn how to understand data and statistics" />
            </div>    
            </div>
            <div className="ofs-grid-row">
            <div className="ofs-grid-column-full">
                <div className="ofs-heading-m ofs-success__paragraph-header">
                    Find out more about our earnings data
                </div>
                <div className="ofs-body ofs-success__paragraph"><Markdown escapeHtml={true} source={successData.findoutmore} /></div>
            </div>
            </div>

            <hr className="ofs-section-break ofs-section-break--visible ofs-outcomes__careers-break" />
        </div>
        <div className="ofs-width-container">
            <div className="ofs-grid-row">
                <div className="ofs-grid-column-full">
                    <div className="ofs-quick-section">
                        <h1 className="ofs-heading-l ofs-success__header">Continuation rates</h1>
                        <div className="ofs-body ofs-success__paragraph"><Markdown escapeHtml={true} source={successData.continuation} /></div>
                    </div>
                    <hr className="ofs-section-break ofs-section-break--visible ofs-outcomes__careers-break" />
                </div>
            </div>
        </div>
        <div className="ofs-width-container">
            <div className="ofs-grid-row">
                <div className="ofs-grid-column-full">
                    <div className="ofs-quick-section">
                        <h1 className="ofs-heading-l ofs-success__header">Student views</h1>
                        <div className="ofs-body ofs-success__paragraph"><Markdown escapeHtml={true} source={successData.studentviews} /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
