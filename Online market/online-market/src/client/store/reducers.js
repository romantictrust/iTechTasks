import { combineReducers } from "redux";
import mainPageReducer from "./MainPage/reducers";

export default combineReducers({
  materials: mainPageReducer
});
