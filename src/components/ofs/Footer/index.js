import React from 'react'
import './styles.scss'

export default (props) => {

    return(
        <footer className="ofs-footer " role="contentinfo">
            <div className="ofs-width-container ">
                <div>
                <ul class="ofs-footer__inline-list">
                    <li class="ofs-footer__inline-list-item">
                        <a class="ofs-footer__link" href="#1">
                        About us
                        </a>
                    </li>
                    <li class="ofs-footer__inline-list-item">
                        <a class="ofs-footer__link" href="#2">
                        Our data
                        </a>
                    </li>
                    <li class="ofs-footer__inline-list-item">
                        <a class="ofs-footer__link" href="#3">
                        Office for students
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}