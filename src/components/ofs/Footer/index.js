import React from 'react'

import './styles.scss'

export default (props) => {

    return(
        <footer className="ofs-footer " role="contentinfo">
            <div className="ofs-width-container ">
                <div class="ofs-footer__navigation">
                    <div class="ofs-footer__section">
                        <ul class="ofs-footer__list ">
                        <li class="ofs-footer__list-item">
                            <a class="ofs-footer__link" href="/versions/video">
                                Homepage 1: Video
                            </a>
                        </li>
                        <li class="ofs-footer__list-item">
                            <a class="ofs-footer__link" href="/versions/search">
                                Homepage 2: Search
                            </a>
                        </li>
                        <li class="ofs-footer__list-item">
                            <a class="ofs-footer__link" href="/versions/quiz">
                                Homepage 3: Quiz
                            </a>
                        </li>
                        <li class="ofs-footer__list-item">
                            <a class="ofs-footer__link" href="/versions/case-studies">
                                Homepage 4: Case studies
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
                <hr class="ofs-footer__section-break" />


                <div>
                <ul className="ofs-footer__inline-list">
                    <li className="ofs-footer__inline-list-item">
                        <a className="ofs-footer__link" href="#1">
                        About us
                        </a>
                    </li>
                    <li className="ofs-footer__inline-list-item">
                        <a className="ofs-footer__link" href="#2">
                        Our data
                        </a>
                    </li>
                    <li className="ofs-footer__inline-list-item">
                        <a className="ofs-footer__link" href="#3">
                        Office for students
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}