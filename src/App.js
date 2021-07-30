import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (

    <Router className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>

  );
}

export default App;
