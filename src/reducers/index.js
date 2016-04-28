import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import userReducer from './user_reducer'
import attendeesReducer from './attendees_reducer'
import VenuesReducer from './reducer_venues'

const rootReducer = combineReducers({
  attendees: attendeesReducer,
  form,
  auth: authReducer,
  user: userReducer,
  venues: VenuesReducer
});

export default rootReducer;
