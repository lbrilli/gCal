import { combineReducers } from "redux";
import calendarReducer from "./calendar_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers ({
    users: usersReducer,
    calendars: calendarReducer
});

export default entitiesReducer;