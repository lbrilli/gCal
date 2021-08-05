import { connect } from 'react-redux'
import { index } from '../../actions/calendar_actions';

const mSTP = (state) => {
  calendars: Object.values(state.calendars)  
};

const mDTP = dispatch => ({
    indexCalendars: (calendars) => dispatch(index(calendars))
});

export default connect(mSTP, mDTP)(CalendarIndex)