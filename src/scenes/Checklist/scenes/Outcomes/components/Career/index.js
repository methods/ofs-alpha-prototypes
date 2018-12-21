import React, {Fragment} from 'react';
import './styles.scss';
import careersData from '../../data/career'
import HeadedContent from '../HeadedContent'
import SearchHint from './components/SearchHint';

export default (props) => {

    function getAdviceRow(careerAdvice) {
        return(
        <Fragment  key={careerAdvice.title}>
            <div className="ofs-grid-row">
                <div className="ofs-grid-column-one-half">
                    <HeadedContent title={careerAdvice.title} content={careerAdvice.content} />
                </div>
                <div className="ofs-grid-column-one-half">
                    <SearchHint hint={careerAdvice.hint} />
                </div>    
            </div>
            <hr className="ofs-section-break ofs-section-break--visible ofs-outcomes__careers-break" />
        </Fragment>
        )
    }

  return (
    <div className="ofs-outcomes__careers-container">
        <div className="ofs-width-container">
        <h1 className="ofs-heading-l ofs-outcomes__header">Career related information</h1>
            { careersData.sections.map(section => getAdviceRow(section)) }
        </div>
    </div>
  )
}
