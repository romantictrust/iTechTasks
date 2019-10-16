import {
  STORAGE_CHANGE_PROFIT_DATA,
  STORAGE_ADD_PAYMENT_OPERATION
} from "../actions/index";

const defaultState = {
  profit: {
    total: 0,
    materials: [
      { material: "Wood", profit: 0 },
      { material: "Iron", profit: 0 },
      { material: "Oil", profit: 0 }
    ]
  },
  payment: []
};

export const mainPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STORAGE_CHANGE_PROFIT_DATA:
      return { ...state, profit: action.payload };
    case STORAGE_ADD_PAYMENT_OPERATION:
      return { ...state, payment: [...state.payment, action.payload] };
    default: {
      return state;
    }
  }
};
