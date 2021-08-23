import { connect } from 'react-redux'
import { index } from '../../actions/calendar_actions';
import CalendarIndex from './calendar_index';

const mSTP = (state) => ({
  calendars: Object.values(state.entities.calendars)  
});

const mDTP = dispatch => ({
    indexCalendars: (calendars) => dispatch(index(calendars))
});

export default connect(mSTP, mDTP)(CalendarIndex)