import { FETCH_ALL_VENUES } from '../actions/types'

export default function(state = [], action) {
    switch(action.type) {
        case `${FETCH_ALL_VENUES}_PENDING`:
            return {isPending: true}
        case `${FETCH_ALL_VENUES}_FULFILLED`:
            return action.payload
    }
    return state
}
 