import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout}) => {

    const session = () => (
        <nav className='splash-login-signup'>
            <Link to='/login'>Log in</Link>
            <br />
            <Link to='/signup'>Sign up</Link>
        </nav>
    );

    const endSession = () => (
        <>
            <button className="today-button">Today</button>
            <p className="head-month" >August 2021</p>
            <button className='log-out-button' onClick={logout}>Log out</button>
        </>
    );

    return currentUser ? endSession() : session();
};

export default Splash;