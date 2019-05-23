import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard'
import Edit from './components/Edit'
import Create from './components/Create'
import Header from './components/Navbar'
import Contact from './components/Contact'

import "./scss/app.scss"




class App extends Component {
  render() {

    return (
      <Router>
        <Header />
        <div className="container">
          <Route path="/" exact component={Dashboard} />
          <Route path="/edit/:id" exact component={Edit} />
          <Route path="/create" exact component={Create} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </Router >

    );
  }
}

export default App;