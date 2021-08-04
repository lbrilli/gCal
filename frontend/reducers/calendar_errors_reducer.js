import { RECEIVE_CALENDAR_ERRORS } from '../actions/calendar_actions'

const calendarErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = []

    switch (acction.type) {
        case RECEIVE_CALENDAR_ERRORS:
            nextState = action.errors;
            return nextState;
        default:
            return state;
    }
}

export default calendarErrorsReducer;