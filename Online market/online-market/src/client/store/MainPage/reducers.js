import {
  FETCH_CHANGE_MATERIAL_DATA,
  STORAGE_CHANGE_USER_DATA,
  STORAGE_CHANGE_PROFIT_DATA
} from "./actions";

const defaultState = {
  data: null,
  user: { id: null, email: null },
  profit: {
    total: 0,
    materials: [
      { material: "Wood", profit: 0 },
      { material: "Iron", profit: 0 },
      { material: "Oil", profit: 0 }
    ]
  }
};

const mainPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CHANGE_MATERIAL_DATA:
      return { ...state, data: action.payload };
    case STORAGE_CHANGE_USER_DATA:
      return { ...state, user: action.payload };
    case STORAGE_CHANGE_PROFIT_DATA:
      return { ...state, profit: action.payload };
    // ?
    default: {
    }
  }
  return state;
};
export default mainPageReducer;
