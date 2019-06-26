import React, { Component } from 'react'
import Tintuc from '../Component/tintuc'
import ChiTiet from '../Component/chitiet'

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export default class dieuhuong extends Component {
    render() {
        return (
            <div>
                <Route  exact path="/" component={Tintuc} />
                <Route path="/tin.:id" component={ChiTiet} />
            </div>
        )
    }
}
