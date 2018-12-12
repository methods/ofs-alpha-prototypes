import React from 'react'
import './styles.scss'

export default (props) => {

    return(
        <footer className="ofs-footer " role="contentinfo">
            <div className="ofs-width-container ">
            <div className="ofs-footer__meta">
                <div className="ofs-footer__meta-item ofs-footer__meta-item--grow">

                <span className="ofs-footer__licence-description">
                    All content is available under the
                    <a className="ofs-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated
                </span>
                </div>
                <div className="ofs-footer__meta-item">
                <a className="ofs-footer__link ofs-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">© Crown copyright</a>
                </div>
            </div>
            </div>
        </footer>
    )
}