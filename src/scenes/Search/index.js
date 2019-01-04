import React from 'react';

import "./styles.scss"

import Header from '../../components/ofs/Header'
import Footer from '../../components/ofs/Footer'

import SearchSummary from './components/SearchSummary'
import SearchItemList from './components/SearchItemList'
import FilterColumn from './components/FilterColumn'

import allCourses from '../../services/data/allCourses';

export default  (props) => {
    return (
        <div className="ofs-template__body">

            <Header activeLink="/search" />
            <div className="ofs-width-container">

                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-full">
                        <h1 className="ofs-heading-xl ofs-search-page-header">Search results</h1>
                    </div>
                </div>
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-full">
                        <SearchSummary count={allCourses.length} />
                    </div>
                </div>
                <div className="ofs-grid-row">
                    <div className="ofs-grid-column-one-third">
                        <FilterColumn />
                    </div>
                    <div className="ofs-grid-column-two-thirds">
                        <SearchItemList items={allCourses} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}