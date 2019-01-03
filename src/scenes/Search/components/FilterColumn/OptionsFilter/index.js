import React from 'react'

import Radios from '../../../../../components/ofs/Radios'
import './styles.scss'

export default (props) => {
    const title = "Choose values"
    const values = ["Campus", "City", "Town"]

    return (
        <Radios values={values} title={title} groupId={title} selected={values[0]}/>
        )
}