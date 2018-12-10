import React from 'react';
import "./styles.scss"
import "./../../styles/all.scss"

export default  (props) => {
    return (
        <div className="ofs-template__body">

            <a href="#main-content" className="ofs-skip-link">Skip to main content</a>

            <header className="govuk-header " role="banner" data-module="header">
                <div className="govuk-header__container govuk-width-container">

                <div className="govuk-header__logo">
                    <a href="/" className="govuk-header__link govuk-header__link--homepage">
                    <span className="govuk-header__logotype">

                    </span>
                    </a>
                </div>
                </div>
            </header>

            <div className="ofs-width-container">
                <main className="ofs-main-wrapper " id="main-content" role="main">
                <h1 className="ofs-heading-xl">Heading xl</h1>
                <h2 className="ofs-heading-l">Heading l</h2>
                <h3 className="ofs-heading-m">Heading m</h3>
                <h4 className="ofs-heading-s">Heading s</h4>
                </main>
            </div>

            <footer className="govuk-footer " role="contentinfo">
                <div className="ofs-width-container ">
                <div className="govuk-footer__meta">
                    <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">

                    <span className="govuk-footer__licence-description">
                        All content is available under the
                        <a className="govuk-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated
                    </span>
                    </div>
                    <div className="govuk-footer__meta-item">
                    <a className="govuk-footer__link govuk-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">© Crown copyright</a>
                    </div>
                </div>
                </div>
            </footer>

        </div>
    )
}