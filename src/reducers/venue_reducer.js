import { ADD_USER, GET_USERS } from '../actions/types'

export default function(state = {}, action) {
    switch(action.type) {
        case ADD_USER:
            return { ...state, message: action.payload }
        case GET_USERS:
            return { ...state, going: action.payload }
    }
    return state
}