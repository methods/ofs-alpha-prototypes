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
import BackLink from '../../components/ofs/BackLink';
import AnchorList from './components/AnchorList';

export default class Course extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const courseId = this.props.match.params.id
        const course = getCourse(courseId)

        const anchors = [
            { label: "Student satisfaction", to: "#student_satisfaction" },
            { label: "Employment", to: "#employment" },
            { label: "Accreditation", to: "#accreditation" },
            { label: "Continuation", to: "#continuation" },
            { label: "Degree results", to: "#degree_results" },
            { label: "Entry information", to: "#entry_information" },
        ]

        return (
            <div className="ofs-template__body">
                <Header activeLink="/search" />
                <div className="ofs-width-container">

                    <div className="ofs-grid-row">
                        <div className="ofs-grid-column-full ofs-course-main-section">
                            <BackLink text="course search" />
                            <CourseHeader course={course} />
                            <SectionBreak />
                            <AnchorList list={anchors} selected="Student satisfaction" />
                            <SectionBreak />

                            <CourseDetails course={course} />
                            <SectionBreak />
                            <CourseJobList course={course} />
                            <SectionBreak />
                            <EarningsDetails course={course} />
                            <SectionBreak />
                            <CourseLinks course={course} />
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}