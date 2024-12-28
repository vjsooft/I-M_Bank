import { combineReducers } from 'redux';
import {loginForm,milelePointStatus,flightBookingForm} from './Reducer'

export default combineReducers({
    auth:loginForm,
    milelePointStatus,
    flightBookingForm
})
