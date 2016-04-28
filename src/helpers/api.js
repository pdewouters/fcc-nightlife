import {FS_CLIENT_ID, FS_CLIENT_SECRET} from '../config/secret'
import axios from 'axios'

const _baseURL = 'https://api.foursquare.com/v2/venues/'

export function getVenues(city){
    const url = `${_baseURL}explore?client_id=${FS_CLIENT_ID}&client_secret=${FS_CLIENT_SECRET}&v=20160417&venuePhotos=1&section=drinks&near=${encodeURIComponent(city)}`
    return axios.get(url)
    .then((cityData) => {
        return cityData
    })
}

const ROOT_URL = 'http://localhost:3090'

export function postSignin(creds) {
    const { email, password } = creds
    return axios.post(`${ROOT_URL}/signin`, { email, password })
}

export function postSignup(creds) {
    const { email, password } = creds
    return axios.post(`${ROOT_URL}/signup`, { email, password })
}

export function getMessage() {
    return axios.get(ROOT_URL, {
        headers: { authorization: localStorage.getItem('token') }
    })
}

export function postAddUserToVenue(venueId) {
    return axios.post(`${ROOT_URL}/venue/${venueId}/adduser`, {}, {
        headers: {authorization: localStorage.getItem('token')}
    })
}

export function getUsersForVenue(venueId) {
    return axios.get(`${ROOT_URL}/venue/${venueId}`, {
        headers: { authorization: localStorage.getItem('token') }        
    })
}

export function getAllVenues() {
    return axios.get(`${ROOT_URL}/venues/all`, {
        headers: { authorization: localStorage.getItem('token') }
    })
}

export function postRemoveUserFromVenue(venueId) {
    return axios.post(`${ROOT_URL}/venue/${venueId}/removeuser`, {}, {
        headers: {authorization: localStorage.getItem('token')}
    })    
}

export function getVenuesAttendees(venueIds) {
    return axios.get(`${ROOT_URL}/venues/ids/${venueIds.join(',')}`, {
        headers: { authorization: localStorage.getItem('token') }
    })
}