import React from 'react';

import "./styles.scss"

import Header from '../../components/ofs/Header'
import Footer from '../../components/ofs/Footer'

import SearchSummary from './components/SearchSummary'
import SearchItemList from './components/SearchItemList'
import FilterColumn from './components/FilterColumn'

export default  (props) => {
    return (
        <div className="ofs-template__body">

            <Header activeLink="/search" />
            <div className="ofs-width-container">

                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-full">
                        <h1>Search results</h1>
                    </div>
                </div>
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-full">
                        <SearchSummary />
                    </div>
                </div>
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-third">
                        <FilterColumn />
                    </div>
                    <div className="ofs-grid-column-two-thirds">
                        <SearchItemList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}