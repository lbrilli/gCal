import { RECEIVE_CALENDAR, RECEIVE_CALENDARS } from "../actions/calendar_actions";

const calendarReducer = (state ={}. action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state);

    switch (action.type) {
        case RECEIVE_CALENDAR:
            nextstate[action.calendar.id] = action.calendar
            return nextState;
        case RECEIVE_CALENDARS:
            return action.calendars;
        default: 
            return state;
    }
}

export default calendarReducer;