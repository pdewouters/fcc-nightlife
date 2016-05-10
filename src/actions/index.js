import {
    postSignin,
    postSignup,
    getVenues,
    postAddUserToVenue,
    getAllVenues,
    postRemoveUserFromVenue,
    getVenuesAttendees
} from '../helpers/api'
import { browserHistory } from 'react-router'
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER,
    ADD_USER,
    FETCH_VENUES,
    FETCH_ALL_VENUES,
    REMOVE_USER,
    FETCH_VENUES_ATTENDEES
} from './types'

export const fetchVenues = (city, authenticated) => {
    return (dispatch) => {
        return dispatch({
            type: FETCH_VENUES,
            payload: {
                promise: getVenues(city)
            }
        }).then(
            response => {
                if(!authenticated) {return}
                const venueIds = response.value.data.response.groups[0].items.map((item) => {
                    return item.venue.id
                })
                
                dispatch(fetchVenuesAttendees(venueIds))
            }
        )
    }
}

export const fetchVenuesAttendees = (venueIds) => {
    return {
        type: FETCH_VENUES_ATTENDEES, payload: { promise: getVenuesAttendees(venueIds) }
    }
}

export function signinUser({ email, password }) {
    return function(dispatch) {
        postSignin( { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER })
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('currentuser', response.data.email)
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
    localStorage.removeItem('currentuser')
    return { type: UNAUTH_USER }
}

export function signupUser({ email, password }) {
    return function(dispatch) {
        postSignup({ email, password })
           .then(response => {
                dispatch({ type: AUTH_USER })
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('currentuser', response.data.email)
                browserHistory.push('/')
            })
            .catch(response => {
                dispatch(authError(response.data.error))
            })
    }
}

// returns new array of users for venue 
export function addUserToVenue(venueId) {

    return (dispatch) => {
        return dispatch({
            type: ADD_USER,
            payload: {
                promise: postAddUserToVenue(venueId)
            }
        }).then(
            () => {
                dispatch(fetchVenuesAttendees([venueId]))
            }
        )
    }
}

export function fetchAllVenues() {
    const apiData = getAllVenues()

    return {
        type: FETCH_ALL_VENUES,
        payload: apiData
    }
}

export function removeUserFromVenue(venueId) {
    
    return (dispatch) => {
        return dispatch({
            type: REMOVE_USER,
            payload: {
                promise: postRemoveUserFromVenue(venueId)
            }
        }).then(
            () => {
                dispatch(fetchVenuesAttendees([venueId]))
            }
        )
    }

}