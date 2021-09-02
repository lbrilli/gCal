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
                    <h1 className="head-month" >{String(DateFns.format(date, dateFormat))}</h1>
                </div>

                <div className="view-selector">
                    <button>DropDown</button>
                    {/* <DropdownButton id="" title="View Selector">
                        <Dropdown.Item href="">Week</Dropdown.Item>
                        <Dropdown.Item href="">Month</Dropdown.Item>
                    </DropdownButton> */}
                </div>
            </div>

            <div className="logout-div">
                <button className='log-out-button' onClick={logout}>Log out</button>
            </div>
        </>
    );

    return currentUser ? endSession() : session();
};

export default Splash;