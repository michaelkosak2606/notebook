import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard'
import Edit from './components/Edit'
import Create from './components/Create'
import Header from './components/Header'
import "./scss/App.scss"




class App extends Component {
  render() {

    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact component={Dashboard} />
          <Route path="/edit/:id" exact component={Edit} />
          <Route path="/create" exact component={Create} />
        </div>
      </Router >

    );
  }
}

export default App;