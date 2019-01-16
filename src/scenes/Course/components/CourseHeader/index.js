import React from 'react';
import "./styles.scss"

export default (props) => {
    const course = props.course

    return (
        <div className="ofs-course-header">
            <h2 className="ofs-heading-l ofs-course-header__title">{course.qualification.label} {course.title.english}</h2>
            <p className="ofs-body  ofs-course-header__subtitle  ofs-!-font-weight-bold">{course.length_of_course.label}, {course.mode.label}</p>
            <div className="ofs-course-header__panel">
                <div className="ofs-course-header__panel__section">
                    <img className="ofs-course-header__panel__icon" src="/assets/icons/location.png" alt="" />
                </div>
                <div class="ofs-course-header__panel__section">
                    <p className="ofs-body ofs-course-header__panel__institution-name ofs-!-font-weight-bold">{course.institution.ukprn_name}</p>
                    <a className="ofs-link" href={props.course.links.course_page.english}>See this course at the {course.institution.ukprn_name} website</a>
                </div>
            </div>
        </div>
    )
}