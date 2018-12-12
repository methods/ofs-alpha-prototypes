import React, { Component } from 'react'
import './styles.scss'
import LoginLogout from './components/LoginLogout'
import Navigation from './components/Navigation'
import Breadcrumbs from './components/Breadcrumbs'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {open:false}
    }

    toggleOpen() {
        const newState = !this.state.open
        this.setState({open:newState})
    }

    render() {
        return(
            <div>
            <Breadcrumbs />
            <header className="ofs-header" role="banner" data-module="header">
                <div className="ofs-header__container ofs-width-container">
                    <div className="ofs-grid-row">
                        <div className="ofs-grid-column-one-half">
                            <div><span className="ofs-header-heading-first">Uni</span><span className="ofs-header-heading-second">hub</span></div>
                            <div>Make confident and informed decisions about HE</div>
                        </div>
                        <div className="ofs-grid-column-one-half">
                            <LoginLogout loggedIn={false} />
                        </div>
                    </div>
                </div>
            </header>
            <Navigation open={this.state.open} toggleVisible={this.toggleOpen.bind(this)} />

            </div>
        )
    }
}