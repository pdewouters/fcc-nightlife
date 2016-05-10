import { FETCH_VENUES_ATTENDEES } from '../actions/types'
import _ from 'lodash'

export default function(state = {
    isFulfilled: false,
    items: []
}, action) {
    switch(action.type) {
        case `${FETCH_VENUES_ATTENDEES}_PENDING`:
            return Object.assign({}, state, {
                isFulfilled: false
            })
        case `${FETCH_VENUES_ATTENDEES}_FULFILLED`:
            let newItems = action.payload.data
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