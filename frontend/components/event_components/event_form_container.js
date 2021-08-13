import { connect } from 'react-redux';
import { create } from '../../actions/event_actions'
import EventForm from './event_form';

const mSTP = (state) => {
    let errors = state.errors
    return {
        errors: errors,
        currentUser: state.session.id,
        calendarId: 1
    }
};

const mDTP = dispatch => {
    return {
        processForm: (event) => dispatch(create(event))
    }
};

export default connect(mSTP, mDTP)(EventForm)