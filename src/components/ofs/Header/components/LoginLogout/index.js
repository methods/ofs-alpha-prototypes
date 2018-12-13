import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"

export default (props) => {

    if(props.loggedIn === false) {
        return (
            <div className="ofs-login-logout">
                <button className="ofs-login-logout-item ofs-signup-btn">Sign up</button>
                <Link to="\" className="ofs-login-logout-item ofs-login-logout__link">Log in</Link>
                <div className="ofs-login-logout__icon"><img src="/assets/icons/user-white.png"/></div>
            </div>
        )
    } else {
        return(
            <div className="ofs-login-logout">
                <Link to="\" className="ofs-login-logout-item ofs-login-logout__link">Log out</Link>
                <div className="ofs-login-logout__icon"><img src="/assets/icons/user-white.png"/></div>
            </div>
        )
    }
}