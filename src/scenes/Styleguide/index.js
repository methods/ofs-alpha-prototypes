import React from 'react';
import "./styles.scss"
import "./../../styles/all.scss"

import Header from '../../components/ofs/Header'
import Footer from '../../components/ofs/Footer'

export default  (props) => {
    return (
        <div className="ofs-template__body">

            <Header />

            <div className="ofs-width-container">
                <main className="ofs-main-wrapper " id="main-content" role="main">
                <h1 className="ofs-heading-xl">Heading xl</h1>
                <h2 className="ofs-heading-l">Heading l</h2>
                <h3 className="ofs-heading-m">Heading m</h3>
                <h4 className="ofs-heading-s">Heading s</h4>
                </main>
            </div>

            <Footer />
        </div>
    )
}