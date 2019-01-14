import React, { Component, Fragment } from 'react';
import Markdown from '../../../../components/ofs/MarkdownContent'
import "./styles.scss"

const noDataMarkdown = "This course has no data on earnings of past students. \n\n  This might be for a number of reasons such as the course being new or because we couldn't get enough responses from old students to draw conclusions."
const salaryMarkdown = "This data comes from DLHE survey of 10,000 students. [Read more](https://www.methods.co.uk)"
const leoMarkdown = "This data comes from the Longitudinal Education Outcomes report 2015 (LEO). [Read more](https://www.methods.co.uk)"
const noSalaryMarkdown = "This course has no data on short term earnings of past students. \n\n This might be for a number of reasons such as the course being new or because we couldn't get enough responses from old students to draw conclusions."
const noLeoMarkdown = "This course has no data on long term earnings of past students. \n\n This might be for a number of reasons such as the course being new or because we couldn't get enough responses from old students to draw conclusions."

export default class EarningsDetails extends Component {
    
    constructor(props) {
        super(props)
        this.hasLeoData = props.course && props.course.statistics && props.course.statistics.leo && Object.keys(props.course.statistics.leo[0]).length > 0
        this.hasSalaryData = props.course && props.course.statistics && props.course.statistics.salary && Object.keys(props.course.statistics.salary[0]).length > 0
        this.leo = this.hasLeoData ? props.course.statistics.leo[0] : null;
        this.salary = this.hasSalaryData ? props.course.statistics.salary[0] : null;
        this.state = {leoOpen: false, salaryOpen: false};
    }


    earningsDiv() {
        if(this.hasLeoData && this.hasSalaryData) {
            return this.hasEarningsDataDiv()
        } else {
            return this.noEarningsDataDiv()
        }
    }

    noEarningsDataDiv() {
        return (
            <div>
                <Markdown content={noDataMarkdown} />
            </div>
        )
    }

    classificationDiv() {
        return (
            <Fragment>
                
            </Fragment>
            )
    }

    hasEarningsDataDiv() {
        return (
            <div>
                {this.classificationDiv()}
                {this.salaryDiv()}
                {this.leoDiv()}
            </div>
        )
    }

    leoDiv() {
        const buttonLabel = this.state.leoOpen ? "less": "more";
        const hiddenClassName = this.state.leoOpen ? "ofs-earnings-block ofs-earnings-block__expanded-section": "ofs-earnings-block__hidden ofs-earnings-block__expanded-section";

        if(this.hasLeoData) {
            
            let aggregation_level = this.salary.aggregation_level;
            let higher_quartile_range = this.leo.higher_quartile_range;
            let lower_quartile_range = this.leo.lower_quartile_range;
            let median = this.salary.median;
            let number_of_graduates = this.leo.number_of_graduates;
            let subject_code = this.salary.subject_code;

            return (
                <div>
                    <table className="ofs-table  ofs-earnings-table">
                        <tbody className="ofs-table__body">
                            <tr className="ofs-table__row">
                                <th className="ofs-table__header" scope="row">Average earnings after 6 years</th>
                                <td className="ofs-table__cell">£{lower_quartile_range} to £{higher_quartile_range}</td>
                                <td className="ofs-table__cell"><button className="ofs-body ofs-underline-button" onClick={() => this.setState({leoOpen:!this.state.leoOpen})}>{buttonLabel}</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={hiddenClassName}>
                        <Markdown content={leoMarkdown} />
                        <table className="ofs-table">
                            <tbody className="ofs-table__body">
                                {this.tableRow("Subject code", subject_code)}
                                {this.tableRow("Aggregation level", aggregation_level)}
                                {this.tableRow("Median", median)}
                                {this.tableRow("Total graduates", number_of_graduates)}
                            </tbody>
                        </table>

                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Markdown content={noLeoMarkdown} />
                </div>
            )
        }
    }

    tableRow(header, value) {
        return (
            <tr className="ofs-table__row">
                <th className="ofs-table__header" scope="row">{header}</th>
                <td className="ofs-table__cell">{value}</td>
            </tr>
        )
    }

    salaryDiv() {
        const buttonLabel = this.state.salaryOpen ? "less": "more";
        const hiddenClassName = this.state.salaryOpen ? "ofs-earnings-block ofs-earnings-block__expanded-section": "ofs-earnings-block__hidden ofs-earnings-block__expanded-section";
        if(this.hasSalaryData) {
            let aggregation_level = this.salary.aggregation_level;
            let higher_quartile_range = this.salary.higher_quartile_range;
            let lower_quartile_range = this.salary.lower_quartile_range;
            let median = this.salary.median;
            let number_of_graduates = this.salary.number_of_graduates;
            let response_rate = this.salary.response_rate;
            let subject_code = this.salary.subject_code;

            return (
                <div>
                    <table className="ofs-table ofs-earnings-table">
                        <tbody className="ofs-table__body">
                            <tr className="ofs-table__row">
                                <th className="ofs-table__header" scope="row">Average earnings after 6 months</th>
                                <td className="ofs-table__cell">£{lower_quartile_range} to £{higher_quartile_range}</td>
                                <td className="ofs-table__cell"><button className="ofs-body ofs-underline-button" onClick={() => this.setState({salaryOpen:!this.state.salaryOpen})}>{buttonLabel}</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={hiddenClassName}>
                        <Markdown content={salaryMarkdown} />
                        <table className="ofs-table ofs-earnings-table">
                            <tbody className="ofs-table__body">
                                {this.tableRow("Subject code", subject_code)}
                                {this.tableRow("Aggregation level", aggregation_level)}
                                {this.tableRow("Median", median)}
                                {this.tableRow("Total graduates", number_of_graduates)}
                                {this.tableRow("Survey response rate", response_rate)}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Markdown content={noSalaryMarkdown} />
                </div>
            )
        }
    }



    render() {
        return (
            <div className="ofs-course-section">
                <h3 className="ofs-heading-m">Earnings</h3>
                { this.earningsDiv() }
            </div>
        )
    }
}