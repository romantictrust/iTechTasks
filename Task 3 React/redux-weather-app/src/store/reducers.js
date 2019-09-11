import { combineReducers } from 'redux';
import pannelReducer from './InputsPannel/reducers';

export default combineReducers({
    weatherInputs: pannelReducer, 
})
