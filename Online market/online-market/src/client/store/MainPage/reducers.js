import {
  FETCH_CHANGE_MATERIAL_DATA,
  STORAGE_CHANGE_USER_DATA
} from "./actions";

const defaultState = {
  data: null,
  user: { id: null, email: null }
};

const mainPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CHANGE_MATERIAL_DATA:
      return { ...state, data: action.payload };
    case STORAGE_CHANGE_USER_DATA:
      return { ...state, user: action.payload };
    // ?
    default: {
    }
  }
  return state;
};
export default mainPageReducer;
