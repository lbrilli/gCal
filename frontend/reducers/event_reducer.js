import {RECEIVE_EVENT, RECEIVE_EVENTS} from "../actions/event_actions";

const eventReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_EVENT:
            nextstate[action.event.id] = action.event
            return nextState;
        case RECEIVE_EVENTS:
            return action.events;
        default:
            return state;
    }
}

export default eventReducer;