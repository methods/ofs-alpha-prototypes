import React from 'react'
import "./styles.scss"

export default (props) => {
    const buttonClass = props.open ? "ofs-header__toggle-menu-button ofs-header__toggle-menu-button--open" : "ofs-header__toggle-menu-button";
    const navigationClass = props.open ? "ofs-header__navigation ofs-header__navigation--open" : "ofs-header__navigation";

    return (
      <div>
      <div className="ofs-header__menu-navigation">
      <div className="ofs-width-container">
        <div role="button" onClick={props.toggleVisible} className={buttonClass} aria-controls="navigation" aria-label="Show or hide Top Level Navigation">Menu</div>
      </div>
      </div>

      <div className="ofs-navigation-bar">
      <div className="ofs-width-container">

      <nav>
        <ul id="navigation" className={navigationClass} aria-label="Top Level Navigation">
          <li className="ofs-header__navigation-item ofs-header__navigation-item--active">
            <a className="ofs-header__link" href="#1">
              Home
            </a>
          </li>
          <li className="ofs-header__navigation-item">
            <a className="ofs-header__link" href="#2">
              Is HE for you?
            </a>
          </li>
          <li className="ofs-header__navigation-item">
            <a className="ofs-header__link" href="#3">
              Student stories
            </a>
          </li>
          <li className="ofs-header__navigation-item">
            <a className="ofs-header__link" href="#4">
              Choosing a course
            </a>
          </li>
          <li className="ofs-header__navigation-item">
            <a className="ofs-header__link" href="#5">
              University finder
            </a>
          </li>
        </ul>
      </nav>
      </div>
      </div>
      </div>
    )
}