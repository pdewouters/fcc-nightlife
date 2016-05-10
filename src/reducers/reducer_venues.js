import { FETCH_VENUES } from '../actions/types'

export default function(state = {
    isFulfilled: false,
    items: []
}, action) {
    switch(action.type) {
        case `${FETCH_VENUES}_PENDING`:
            return Object.assign({}, state, {
                isFulfilled: false
            })
        case `${FETCH_VENUES}_FULFILLED`:
            return Object.assign({}, state, {
                isFulfilled: true,
                items: action.payload.data.response.groups[0].items,
                lastUpdated: action.receivedAt
            })
    }
    return state
}