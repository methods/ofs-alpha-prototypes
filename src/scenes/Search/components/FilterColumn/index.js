import React from 'react'

import './styles.scss'
import ListFilter from './ListFilter';
import FreeTextFilter from './FreeTextFilter';
import OptionsFilter from './OptionsFilter';

export default (props) => {
    return (
        <div>
            <FreeTextFilter />
            <OptionsFilter />
            <ListFilter />
        </div>
    )
}