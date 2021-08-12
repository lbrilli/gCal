import { combineReducers } from "redux";
import calendarReducer from "./calendar_reducer";
import usersReducer from "./users_reducer";
import eventReducer from "./event_reducer";

const entitiesReducer = combineReducers ({
    users: usersReducer,
    calendars: calendarReducer,
    events: eventReducer
});

export default entitiesReducer;