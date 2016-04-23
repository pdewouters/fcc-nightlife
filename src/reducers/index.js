import { combineReducers } from 'redux';
import VenuesReducer from './reducer_venues'
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import venueReducer from './venue_reducer'

const rootReducer = combineReducers({
  venues: VenuesReducer,
  form,
  auth: authReducer,
  venue: venueReducer
});

export default rootReducer;
