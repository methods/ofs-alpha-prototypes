import React, { Component } from 'react';

import "./styles.scss"

export default class CourseJobList extends Component {
    
    constructor(props) {
        super(props)
        this.hasData = props.course && props.course.statistics && props.course.statistics.job_list && props.course.statistics.job_list.length > 0
        if(this.hasData) {
            this.joblist = props.course.statistics.job_list
        } else {
            this.joblist = []
        }
        this.state = {open: false}
    }

    getJobListItem(job) {
        if(this.state.open || job.order <= 5) {
            return <li key={job.order} className="ofs-list-item">{job.list[0].job} ({job.list[0].percentage_of_students}%)</li>
        } else {
            return ''
        }
    }

    render() {
        if(this.hasData) {
            const buttonLabel = this.state.open ? "less": "more";
            return (
                <div className="ofs-course-section">
                    <h3 className="ofs-heading-m">Jobs after graduation</h3>
                    <ul className="ofs-list ofs-list--number">
                        {this.joblist.map(job => this.getJobListItem(job))}
                    </ul>
                    <button className="ofs-body ofs-underline-button" onClick={() => this.setState({open:!this.state.open})}>{buttonLabel}</button>
                </div>
            )
        } else {
            return ''
        }
    }
}