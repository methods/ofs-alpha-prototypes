import React from 'react';

import "./styles.scss"

export default  (props) => {
    const links = props.course.links

    function courseLink() {
        return <li className="ofs-list-item">About this course <a href={links.course_page.english}>here</a></li>
    }

    function assessmentLink() {
        return <li className="ofs-list-item">Course assessment <a href={links.assessment_method.english}>here</a></li>
    }

    function financialSupportLink() {
        return <li className="ofs-list-item">Financial support <a href={links.financial_support_details.english}>here</a></li>
    }

    function employmentLink() {
        return <li className="ofs-list-item">Graduate careers <a href={links.employment_details.english}>here</a></li>
    }

    function learningAndTeachingLink() {
        return <li className="ofs-list-item">Course teaching and learning <a href={links.learning_and_teaching_methods.english}>here</a></li>
    }

    return (
        <div>
        <h3 className="ofs-heading-m">Further information</h3>
            <ul className="ofs-list ofs-course-links">
                {courseLink()}
                {learningAndTeachingLink()}
                {assessmentLink()}
                {financialSupportLink()}
                {employmentLink()}
            </ul>
        </div>
    )
}