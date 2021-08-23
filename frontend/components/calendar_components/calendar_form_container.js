import React from 'react';
import { connect } from 'react-redux';
import { create } from '../../actions/calendar_actions'
import CalendarForm from './calendar_form';

const mSTP = (state) => {
    let errors = state.errors
    return {
        errors: errors,
        currentUser: state.session.id
    }
};

const mDTP = dispatch => {
    return {
        processForm: (calendar) => dispatch(create(calendar))
    }
};

export default connect(mSTP,mDTP)(CalendarForm)