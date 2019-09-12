import { combineReducers } from 'redux';
import pannelReducer from './InputsPannel/reducers';
import fetchedDataReducer from './FetchWeatherAPI/reducers';

export default combineReducers({
    weatherInputs: pannelReducer, 
    fetchedData: fetchedDataReducer
})
