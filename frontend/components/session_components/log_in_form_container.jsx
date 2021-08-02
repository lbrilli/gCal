import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { log_in } from '../../actions/session_actions'
import SessionForm from './session_form'

const mSTP = ({ errors }) => {
    return {
        errors : errors.session,
        formType: 'Sign in',
        navLink: <Link to="/signup">Create Account</Link>

        
    }
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(log_in(user)),
    };
};

export default connect(mSTP, mDTP)(SessionForm)