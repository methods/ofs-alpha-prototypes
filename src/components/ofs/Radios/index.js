import React, { Component } from 'react'

import './styles.scss'


export default class Radios extends Component {
    
    constructor(props){
        super(props);

        const selected = props.selected ? props.selected : ""
        this.state = {selectedOption: selected}
    }

    getRadioDiv(radioGroup, value) {
        const inputId = `${radioGroup}-${value}`
        return (
            <div className="ofs-radios__item" key={inputId}>
                <input className="ofs-radios__input" id={inputId} name={radioGroup} type="radio" value={value} checked={value === this.state.selectedOption} onChange={this.handleOptionChange} />
                <label className="ofs-label ofs-radios__label" htmlFor={inputId}>
                    {value}
                </label>
            </div>
        )
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
        
        if(this.props.onChange) {
            this.props.onChange(changeEvent)
        }
      }

    render(){
        const title = this.props.title ? this.props.title : ""
        const values = this.props.values ? this.props.values : ""
        const groupId = this.props.groupId ? this.props.groupId : ""

        return (
            <div className="ofs-form-group">
                <fieldset className="ofs-fieldset">
                    <label className="ofs-label--s" htmlFor={groupId}>
                        {title}
                    </label>
                    <div className="ofs-radios" id={groupId}>
                        {values.map(value => this.getRadioDiv(groupId, value))}
                    </div>
                </fieldset>
            </div>
            )
    }
}