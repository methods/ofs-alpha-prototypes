import React from 'react'

import './styles.scss'

export default (props) => {
    const title = "Filter"
    const hint = "Enter text here"
    
    const hintId = title + "-hint"

    return (
        <div className="ofs-form-group">
            <label className="ofs-label--s" htmlFor={title}>
                {title}
            </label>
            <span id={hintId} className="ofs-hint">
                {hint}
            </span>
            <input className="ofs-input ofs-input--width-10" id={title} name={title} type="text" aria-describedby={hintId} />
        </div>
    )
}