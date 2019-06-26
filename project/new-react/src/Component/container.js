import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link className="col-md-4" to={'/tin.' +this.props.id}>
                <div className="post">
                    <div className="post-img" href="#1"><img src={this.props.anh} alt='asd' /></div>
                    <div className="post-body">
                        <div className="post-meta">
                            <span className="post-date">{this.props.ngaydang}</span>
                        </div>
                        <h3 className="post-title"><div href="#3">{this.props.tieude}</div></h3>
                    </div>
                </div>
            </Link>
        )
    }
}
