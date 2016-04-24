import {
    postSignin,
    postSignup,
    getVenues,
    getMessage,
    postAddUserToVenue,
    getUsersForVenue,
    getAllVenues,
    postRemoveUserFromVenue
} from '../helpers/api'
import { browserHistory } from 'react-router'
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    FETCH_MESSAGE,
    ADD_USER,
    FETCH_VENUES,
    GET_USERS,
    FETCH_ALL_VENUES,
    REMOVE_USER
} from './types'

export function fetchVenues(city) {
    const apiData = getVenues(city)

    return {
        type: FETCH_VENUES,
        payload: apiData
    }
}

export function signinUser({ email, password }) {
    return function(dispatch) {
        postSignin( { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER })
                localStorage.setItem('token', response.data.token)
                browserHistory.push('/')
            })
            .catch(() => {
                dispatch(authError('Bad login info'))
            })
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token')
    return { type: UNAUTH_USER }
}

export function signupUser({ email, password }) {
    return function(dispatch) {
        postSignup({ email, password })
           .then(response => {
                dispatch({ type: AUTH_USER })
                localStorage.setItem('token', response.data.token)
                browserHistory.push('/')
            })
            .catch(response => {
                dispatch(authError(response.data.error))
            })
    }
}

export function fetchMessage() {
    return function(dispatch) {
        getMessage()
        .then(response => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            })
        })
    }
}

export function addUserToVenue(venueId) {
    return function(dispatch) {
        postAddUserToVenue(venueId)
        .then(response => {
            dispatch({
                type: ADD_USER,
                payload: response.data.message
            })
        })
    }
}

export function fetchUsersForVenue(venueId) {
    return function(dispatch) {
        getUsersForVenue(venueId)
            .then(response => {
                dispatch({
                    type: GET_USERS,
                    payload: response.data.going
                })
            })
    }    
}

export function fetchAllVenues() {
    return function(dispatch) {
        getAllVenues()
        .then(response => {
            dispatch({
                type: FETCH_ALL_VENUES,
                payload: response.data
            })
        })
    }
}

export function removeUserFromVenue(venueId) {
    return function(dispatch) {
        postRemoveUserFromVenue(venueId)
        .then(response => {
            dispatch({
                type: REMOVE_USER,
                payload: response.data.message
            })
        })
    }
}