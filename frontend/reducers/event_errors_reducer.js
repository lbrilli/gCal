import { RECEIVE_EVENT_ERRORS } from '../actions/event_actions'

const eventErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = []

    switch (action.type) {
        case RECEIVE_EVENT_ERRORS:
            nextState = action.errors;
            return nextState;
        default:
            return state;
    }
}

export default eventErrorsReducer;