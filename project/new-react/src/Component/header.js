import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class header extends Component {
    render() {
        return (
            <header id="header" className='mb-4'>
                {/* Nav */}
                <div id="nav">
                    {/* Main Nav */}
                    <div id="nav-fixed">
                        <div className="container">
                            {/* logo */}
                            <ul className="nav-menu nav navbar-nav">
                                <li><Link to="/">News</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
