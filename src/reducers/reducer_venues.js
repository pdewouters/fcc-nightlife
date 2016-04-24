import { FETCH_VENUES } from '../actions/types'

export default function(state = [], action) {
    switch(action.type) {
        case `${FETCH_VENUES}_PENDING`:
            return {isPending:true}
        case `${FETCH_VENUES}_FULFILLED`:
            return action.payload.data.response.groups[0].items
    }
    return state
}