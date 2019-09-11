import { createStore } from 'redux';
import mixReducer from './reducers';

const store = createStore(mixReducer);
export default store;