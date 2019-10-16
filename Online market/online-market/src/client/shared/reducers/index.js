import { FETCH_CHANGE_MATERIAL_DATA, STORAGE_CHANGE_USER_DATA, STORAGE_CLEAR } from "../actions/index";

const defaultState = {
  data: null,
  user: { id: null, email: null },
  usersList: []
};

export const sharedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CHANGE_MATERIAL_DATA:
      return { ...state, data: action.payload };
    case STORAGE_CHANGE_USER_DATA:
      return { ...state, user: action.payload };
    case STORAGE_CLEAR:
      return defaultState;
    default: {
      return state;
    }
  }
};
