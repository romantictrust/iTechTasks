import { CHANGE_USERS_LIST_DATA } from "../actions/index";

const defaultState = {
  usersList: []
};

export const adminPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_USERS_LIST_DATA:
      return { ...state, usersList: action.payload };
    default: {
      return state;
    }
  }
};
