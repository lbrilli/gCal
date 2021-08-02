import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { sign_up } from '../../actions/session_actions'
import SessionForm from './session_form'

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Create account',
        navLink: <Link to="/login">Sign in instead</Link>


    }
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(sign_up(user)),
    };
};

export default connect(mSTP, mDTP)(SessionForm)