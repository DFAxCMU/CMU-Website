import React from 'react'
import Link from 'gatsby-link'

import './header.css'
import logo from './header_logo.png'

class Header extends React.Component {
    render() {
        return <div className="header">
            <img className="logo" src={ logo } alt="DFAxCMU" />
            <div className="navItems">
                <span onClick={ this.scrollTo("mission") } className="navItem">About</span>
                <span onClick={ this.scrollTo("projects") } className="navItem">Projects</span>
                <span onClick={ this.scrollTo("members") } className="navItem">Members</span>
            </div>
        </div>
    }

    scrollTo(id) {
        return () => {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }
}

export default Header
