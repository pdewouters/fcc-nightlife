import { FETCH_VENUES_ATTENDEES } from '../actions/types'
import _ from 'lodash'

export default function(state = {
    isFulfilled: false,
    items: []
}, action) {
    let newItems = []
    switch(action.type) {
        case `${FETCH_VENUES_ATTENDEES}_PENDING`:
            return Object.assign({}, state, {
                isFulfilled: false
            })
        case `${FETCH_VENUES_ATTENDEES}_FULFILLED`:
            newItems = action.payload.data
            state.items.map((item) => {
                if(!_.find(newItems, {venue: item.venue})){
                    newItems.push(item)
                }
            })

            return Object.assign({}, state, {
                isFulfilled: true,
                items: newItems
            })
    }
    return state
}