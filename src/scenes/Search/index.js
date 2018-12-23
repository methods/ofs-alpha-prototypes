import React from 'react';

import "./styles.scss"

import Header from '../../components/ofs/Header'
import Footer from '../../components/ofs/Footer'

export default  (props) => {
    return (
        <div className="ofs-template__body">

            <Header activeLink="/search" />
            <div className="ofs-width-container">

                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-full">
                        <h1>Search</h1>
                    </div>
                </div>
            
            </div>
            <Footer />
        </div>
    )
}