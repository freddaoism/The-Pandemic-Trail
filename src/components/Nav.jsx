import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch, Link
  } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav_container">
            <div className="nav_logo">
                <Link className="logo_text" to="/">Logo</Link>
            </div>
            <div className="nav_links">
                <Link to="/">Home</Link>
                <Link to="/portfolio">High Scores</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Nav;
