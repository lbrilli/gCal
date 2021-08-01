import React from 'react';
import ReactDOM from 'react-dom';
import log_in from './util/session_api_util'
import log_out from './util/session_api_util'
import signup from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    
    window.signup = signup;
    window.log_in = log_in;
    window.log_out = log_out;

    ReactDOM.render(<h1>React is working!</h1>, root);
})