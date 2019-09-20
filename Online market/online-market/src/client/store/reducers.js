import { combineReducers } from "redux";
import mainPageReducer from "./MainPage/reducers";
import authPageReducer from './AuthPage/reducers';

export default combineReducers({
  materials: mainPageReducer,
  user: authPageReducer
});
