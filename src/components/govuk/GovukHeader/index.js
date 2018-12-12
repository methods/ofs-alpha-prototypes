import React from 'react'
import './styles.scss'

export default (props) => {

    return(
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
    )
}