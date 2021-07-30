import React from 'react'
import Nav from '../components/Nav'

const HomePage = () => {
    return (
        <div>
            <Nav />
            <div className="login_container">
                <h1 className="title">The Pandemic Trail</h1>
                <div className="btn_link_container">
                    <a className="btn_link" href="#">Login</a>
                    <a className="btn_link" href="#">Signup</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
