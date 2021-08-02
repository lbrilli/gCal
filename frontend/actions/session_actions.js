import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const sign_up = (user) => dispatch => (
    SessionAPIUtil.sign_up(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), error => (
        dispatch(receiveErrors(error.responceJSON))
    ))
)

export const log_in = (user) => dispatch => (
    SessionAPIUtil.log_in(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ))
)

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
)