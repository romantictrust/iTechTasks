import {
  FETCH_CHANGE_MATERIAL_DATA
} from "./actions";

const defaultState = {
  data: null
};

const mainPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CHANGE_MATERIAL_DATA:
      return { ...state, data: action.payload };
    // ?
    default: {}
  }
  return state;
};
export default mainPageReducer;
