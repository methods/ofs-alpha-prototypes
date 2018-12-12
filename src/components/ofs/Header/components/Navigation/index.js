import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"

export default (props) => {
    return (
      <div className="ofs-navigation-bar">
      <div className="ofs-width-container">
      <button type="button" role="button" onClick={props.toggleVisible} className="ofs-header__menu-button js-header-toggle" aria-controls="navigation" aria-label="Show or hide Top Level Navigation">Menu</button>
      <nav>
        <ul id="navigation" className="ofs-header__navigation" aria-label="Top Level Navigation">
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
    )
}