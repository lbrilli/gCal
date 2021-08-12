import { connect } from 'react-redux';
import { show } from '../../actions/event_actions';
import EventShow from './event_show';

const mSTP = (state) => {
    let errors = state.errors
    return {
        errors: errors,
        currentUser: state.session.id,
        event: Object.assign(state.entities.events)
    }
}

const mDTP = dispatch => {
    return {
        showEvent: (event) => dispatch(show(event))
    }
};

export default connect(mSTP, mDTP)(EventShow)