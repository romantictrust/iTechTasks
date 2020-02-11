import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../actions/index";

const defaultState = {
  registerStatus: {
    aborted: false,
    error: "",
    loading: false
  }
};

export const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        ...{ registerStatus: { aborted: true, error: action.payload } }
      };
    case REGISTER_USER_REQUEST:
      return { ...state, ...{ registerStatus: { loading: true } } };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...{
          registerStatus: { loading: false, aborted: false }
        }
      };
    default: {
      return state;
    }
  }
};
