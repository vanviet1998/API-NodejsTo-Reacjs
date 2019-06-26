import React, { Component } from 'react'
import Header from './Component/header'
import Container from './Component/container'
import Footer from './Component/footer'
import Dieuhuong from './Router/dieuhuong'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
 

  

  render() {
    return (
      <Route>
        <Header></Header>
        <div className='container'>
          <div className='row'>
          
            <Dieuhuong></Dieuhuong>
          </div>
        </div>
        <Footer></Footer>
      </Route>
    );
  }
}

export default App;
