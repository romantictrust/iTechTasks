import { combineReducers } from "redux";
import { sharedReducer } from "../shared/reducers/index";
import { mainPageReducer } from "../pages/MainPage/reducers/index";
import { adminPageReducer } from "../pages/AdminPage/reducers/index";

const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  adminPage: adminPageReducer,
  shared: sharedReducer
});
export default rootReducer;
