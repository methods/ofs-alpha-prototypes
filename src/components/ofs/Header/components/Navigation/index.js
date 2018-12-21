import React from 'react'
import "./styles.scss"

export default (props) => {
    const buttonClass = props.open ? "ofs-header__toggle-menu-button ofs-header__toggle-menu-button--open" : "ofs-header__toggle-menu-button";
    const navigationClass = props.open ? "ofs-header__navigation ofs-header__navigation--open" : "ofs-header__navigation";

    function getNavigationItem(title, link, currentLink) {
      const navClass = link === currentLink ? "ofs-header__navigation-item ofs-header__navigation-item--active" : "ofs-header__navigation-item"
      return (
        <li className={navClass}>
          <a className="ofs-header__link" href={link}>
            {title}
          </a>
        </li>
      )
    }

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
          {getNavigationItem("Home", "/", props.activeLink)}
          {getNavigationItem("Is HE for you?", "/", props.activeLink)}
          {getNavigationItem("Student stories", "/", props.activeLink)}
          {getNavigationItem("Choosing a course", "/choose-a-course", props.activeLink)}
          {getNavigationItem("University finder", "/", props.activeLink)}
        </ul>
      </nav>
      </div>
      </div>
      </div>
    )
}