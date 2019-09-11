import { INPUT_CHANGE_CITY_TEXT, SELECT_CHANGE_DAYS_AMOUNT } from "./actions";

const defaultState = {
  city: "",
  days: ""
};

const pannelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_CHANGE_CITY_TEXT:
      return { ...state, city: action.payload };
    case SELECT_CHANGE_DAYS_AMOUNT:
      return { ...state, days: action.payload };
  }
  return state;
};
export default pannelReducer;
