import {
  CHANGE_USERS_LIST_DATA,
  UPDATE_MATERIAL_REQUEST,
  UPDATE_MATERIAL_SUCCESS,
  UPDATE_MATERIAL_FAILURE
} from "../actions/index";

const defaultState = {
  usersList: [],
  materialUpdate: {
    aborted: false,
    error: "",
    loading: false
  }
};

export const adminPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_USERS_LIST_DATA:
      return { ...state, usersList: action.payload };
    case UPDATE_MATERIAL_FAILURE:
      return {
        ...state,
        ...{ materialUpdate: { aborted: true, error: action.payload } }
      };
    case UPDATE_MATERIAL_REQUEST:
      return { ...state, ...{ materialUpdate: { loading: true } } };
    case UPDATE_MATERIAL_SUCCESS:
      return {
        ...state,
        ...{ materialUpdate: { loading: false, aborted: false } }
      };
    default: {
      return state;
    }
  }
};
