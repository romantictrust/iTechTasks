import { FETCH_CHANGE_USERS_LIST_DATA } from './actions';

const defaultState = {
  usersList: [],
};

const adminPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CHANGE_USERS_LIST_DATA:
      return { ...state, usersList: action.payload };
    default: {
      return state;
    }
  }
};
export default adminPageReducer;
