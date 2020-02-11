import {
  CHANGE_MATERIAL_DATA,
  STORAGE_CHANGE_USER_DATA,
  STORAGE_CLEAR,
  CHANGE_USER_DATA_REQUEST,
  CHANGE_USER_DATA_SUCCESS,
  CHANGE_USER_DATA_FAILURE
} from "../actions/index";

const defaultState = {
  data: null,
  user: { id: null, email: null },
  userUpdate: {
    aborted: false,
    error: "",
    loading: false
  },
  usersList: []
};

export const sharedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_MATERIAL_DATA:
      return { ...state, data: action.payload };
    case STORAGE_CHANGE_USER_DATA:
      return { ...state, user: action.payload };
    case CHANGE_USER_DATA_FAILURE:
      return {
        ...state,
        ...{ userUpdate: { aborted: true, error: action.payload } }
      };
    case CHANGE_USER_DATA_REQUEST:
      return { ...state, ...{ userUpdate: { loading: true } } };
    case CHANGE_USER_DATA_SUCCESS:
      return {
        ...state,
        ...{ userUpdate: { loading: false, aborted: false } }
      };
    case STORAGE_CLEAR:
      return defaultState;
    default: {
      return state;
    }
  }
};
