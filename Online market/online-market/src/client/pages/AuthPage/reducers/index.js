import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  RECONFIRM_USER_REQUEST,
  RECONFIRM_USER_SUCCESS,
  RECONFIRM_USER_FAILURE
} from "../actions/index";

const defaultState = {
  loginStatus: {
    aborted: false,
    error: "",
    loading: false
  },
  reconfirmStatus: {
    aborted: false,
    error: "",
    loading: false
  },
  response: {}
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        ...{ loginStatus: { aborted: true, error: action.payload } }
      };
    case LOGIN_USER_REQUEST:
      return { ...state, ...{ loginStatus: { loading: true } } };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...{
          response: action.payload,
          loginStatus: { loading: false, aborted: false }
        }
      };
    case RECONFIRM_USER_FAILURE:
      return {
        ...state,
        ...{ loginStatus: { aborted: true, error: action.payload } }
      };
    case RECONFIRM_USER_REQUEST:
      return { ...state, ...{ loginStatus: { loading: true } } };
    case RECONFIRM_USER_SUCCESS:
      return {
        ...state,
        ...{
          response: action.payload,
          loginStatus: { loading: false, aborted: false }
        }
      };
    default: {
      return state;
    }
  }
};
