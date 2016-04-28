import { ADD_USER, REMOVE_USER } from '../actions/types'

export default function(state = {
    isPending: false,
    items: []
}, action) {
    switch(action.type) {
        case `${ADD_USER}_PENDING`:
            return Object.assign({}, state, {
                isPending: true
            })
        case `${ADD_USER}_FULFILLED`:
            return Object.assign({}, state, {
                isPending: false,
                items: action.payload.data.going,
                lastUpdated: action.receivedAt
            })
        case `${REMOVE_USER}_PENDING`:
            return Object.assign({}, state, {
                isPending: true
            })
        case `${REMOVE_USER}_FULFILLED`:
            return Object.assign({}, state, {
                isPending: false,
                items: action.payload.data.going,
                lastUpdated: action.receivedAt
            })
    }
    return state
}