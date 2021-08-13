import { connect } from 'react-redux';
import { show } from '../../actions/calendar_actions';
import CalendarShow from './calendar_show';

const mSTP = (state) => {
    let errors = state.errors
    return {
        errors: errors,
        currentUser: state.session.id,
        calendar: Object.assign(state.entities.calendars),
        events: Object.assign(state.entities.events)
    }
}

const mDTP = dispatch => {
    return {
        showCalendar: (calendar) => dispatch(show(calendar))
    }
};

export default connect (mSTP,mDTP)(CalendarShow)