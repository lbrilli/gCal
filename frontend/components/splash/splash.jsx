import React from 'react';
import { Link } from 'react-router-dom';
import * as DateFns from 'date-fns';

const date = new Date();
const dateFormat = "MMMM yyyy";

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
            <div className="header-middle">
                <div className="today-month">
                    <div className="today-chevrons">
                        <button className="today-button">Today</button>
                        <div className="chevron-div-head">
                            <button className="chevron-prev-head">{"<"}</button>
                            <button className="chevron-next-head">{">"}</button>
                        </div>
                    </div>
                    <div className="head-month">{String(DateFns.format(date, dateFormat))}</div>
                </div>

                <div className="view-selector-div">
                    <select name="views" className="view-selector">
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                    </select>
                </div>
            </div>

            <div className="logout-div">
                <button className='log-out-button' onClick={logout}> Out </button>
            </div>
        </>
    );

    return currentUser ? endSession() : session();
};

export default Splash;