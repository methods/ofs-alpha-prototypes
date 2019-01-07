import React from 'react';
import "./styles.scss"

export default  (props) => {
    const course = props.course

    function distanceLearningDiv() {
        return <li className="ofs-list-item">Distance learning: {course.distance_learning.label}</li>
    }
    function lengthOfCourseDiv() {
        return <li className="ofs-list-item">Length of course: {course.length_of_course.label}</li>
    }
    function courseModeDiv() {
        return <li className="ofs-list-item">Study mode: {course.mode.label}</li>
    }
    // function qualificationDiv() {
    //     return <li className="ofs-list-item">Qualification: {course.qualification.name}</li>
    // }
    function sandwichYearDiv() {
        return <li className="ofs-list-item">Sandwich year: {course.sandwich_year.label}</li>
    }
    function yearAbroadDiv() {
        return <li className="ofs-list-item">Year abroad: {course.year_abroad.label}</li>
    }

    return (
        <div>
        <h3 className="ofs-heading-m">Study details</h3>
            <ul className="ofs-list ofs-course-details">
                {/* {qualificationDiv()} */}
                {courseModeDiv()}
                {lengthOfCourseDiv()}
                {sandwichYearDiv()}
                {yearAbroadDiv()}
                {distanceLearningDiv()}
            </ul>
        </div>
    )
}