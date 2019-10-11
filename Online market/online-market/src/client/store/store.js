import { createStore } from 'redux';
import mixReducer from './reducers';

const store = createStore(mixReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
