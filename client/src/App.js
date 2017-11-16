import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'



class App extends Component {
    constructor(props){
      super(props)
      this.state={
        auth: false,
        user: null,
      }
    }

    render() {
      <Router>
      <Header />
      <div className='container'>
        <Route exact path='/' component={Home} />
      <Footer />
      </Router>
    }
}

export default App;
