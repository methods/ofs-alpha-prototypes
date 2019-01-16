import React, { Component } from 'react';

import "./styles.scss"

import Header from '../../components/ofs/Header'
import Footer from '../../components/ofs/Footer'

import getCourse from '../../services/data/getCourse'
import CourseDetails from './components/CourseDetails';
import CourseLinks from './components/CourseLinks';
import CourseJobList from './components/CourseJobList';
import EarningsDetails from './components/EarningsDetails';
import CourseHeader from './components/CourseHeader';
import SectionBreak from '../../components/ofs/SectionBreak';

export default class Course extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const courseId = this.props.match.params.id
        const course = getCourse(courseId)

        return (
            <div className="ofs-template__body">
                <Header activeLink="/search" />
                <div className="ofs-width-container">

                    <div className="ofs-grid-row">
                        <div className="ofs-grid-column-full ofs-course-main-section">
                            <CourseHeader course={course} />
                            <SectionBreak />
                            <CourseDetails course={course} />
                            <CourseJobList course={course} />
                            <EarningsDetails course={course} />
                            <CourseLinks course={course} />
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}