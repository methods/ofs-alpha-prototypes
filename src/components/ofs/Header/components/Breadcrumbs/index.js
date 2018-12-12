import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"

export default (props) => {
    return (
      <div className="ofs-breadcrumb-bar">
        <div className="ofs-width-container">
        <div className="ofs-breadcrumbs">
          <ol className="ofs-breadcrumbs__list">
            <li className="ofs-breadcrumbs__list-item">
              <a className="ofs-breadcrumbs__link" href="#">Home</a>
            </li>
            <li className="ofs-breadcrumbs__list-item">
              <a className="ofs-breadcrumbs__link" href="#">Choosing a course</a>
            </li>
          </ol>
        </div>
      </div>
      </div>
    )
}