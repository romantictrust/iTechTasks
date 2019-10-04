import { combineReducers } from "redux";
import mainPageReducer from "./MainPage/reducers";
import adminPageReducer from "./AdminPage/reducers";

export default combineReducers({
  mainPage: mainPageReducer,
  adminPage: adminPageReducer
});
