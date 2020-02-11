import { combineReducers } from "redux";
import { sharedReducer } from "../shared/reducers/index";
import { mainPageReducer } from "../pages/MainPage/reducers/index";
import { adminPageReducer } from "../pages/AdminPage/reducers/index";
import { authReducer } from '../pages/AuthPage/reducers/index';
import { registerReducer } from '../pages/RegisterPage/reducers/index';

const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  adminPage: adminPageReducer,
  shared: sharedReducer,
  auth: authReducer,
  register: registerReducer
});
export default rootReducer;
