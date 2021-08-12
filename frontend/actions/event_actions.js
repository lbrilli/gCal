import * as EventAPIUtil from '../util/event_api_util'

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

export const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    event
})

export const receiveEvents = (events) => ({
    type: RECEIVE_EVENTS,
    events
})

export const receiveEventErrors = (errors) => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
})

export const create = (event) => dispatch => (
    EventAPIUtil.create(event).then(event => (
        dispatch(receiveEvent(event))
    ), error => (
        dispatch(receiveEventErrors(error.responseJSON))
    ))
)

export const update = (event) => dispatch => (
    EventAPIUtil.update(event).then(event => (
        dispatch(receiveEvent(event))
    ))
)

export const destroy = (event) => dispatch => (
    EventAPIUtil.destroy(event).then(event => (
        dispatch(receiveEvent(event))
    ))
)

export const show = (event) => dispatch => (
    EventAPIUtil.show(event).then(event => (
        dispatch(receiveEvent(event))
    ))
)

