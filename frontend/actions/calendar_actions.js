import * as CalendarAPIUtil from '../util/calendar_api_util'

export const RECEIVE_CALENDAR = 'RECEIVE_CALENDAR';
export const RECEIVE_CALENDARS = 'RECEIVE_CALENDARS';
export const RECEIVE_CALENDAR_ERRORS = 'RECEIVE_CALENDAR_ERRORS'

export const receiveCalendar = (calendar) => ({
    type: RECEIVE_CALENDAR,
    calendar
})

export const receiveCalendars = (calendars) => ({
    type: RECEIVE_CALENDARS,
    calendars
})

export const receiveCalendarErrors = (errors) => ({
    type: RECEIVE_CALENDAR_ERRORS,
    errors
})

export const create = (calendar) => dispatch => (
    CalendarAPIUtil.create(calendar).then(calendar => (
        dispatch(receiveCalendar(calendar))
    ), error => (
        dispatch(receiveCalendarErrors(error.responseJSON))
    ))
)

export const destroy = (calendar) => dispatch => (
    CalendarAPIUtil.destroy(calendar).then(calendar => (
        dispatch(receiveCalendar(calendar))
    ), error => (
        dispatch(receiveCalendarErrors(error.responseJSON))
    ))
)

export const show = (calendar) => dispatch => (
    CalendarAPIUtil.show(calendar).then(calendar => (
        dispatch(receiveCalendar(calendar))
    ), error => (
        dispatch(receiveCalendarErrors(error.responseJSON))
    ))
)

export const index = (calendars) => dispatch => (
    CalendarAPIUtil.index(calendars).then(calendars => (
        dispatch(receiveCalendars(calendars))
    ), error => (
        dispatch(receiveCalendarErrors(error.responseJSON))
    ))
)