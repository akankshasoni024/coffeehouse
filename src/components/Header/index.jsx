import React from "react";
import './style.css'
import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <Link className="main-logo" to="/">{props.title}</Link>
            </div>
            <div className="navbar-container">
               


            </div>
        </div>
    )
}

export default Header
