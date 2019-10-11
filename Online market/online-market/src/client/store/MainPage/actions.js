export const FETCH_CHANGE_MATERIAL_DATA = 'FETCH_CHANGE_MATERIAL_DATA';
export const STORAGE_CHANGE_USER_DATA = 'STORAGE_CHANGE_USER_DATA';
export const STORAGE_CHANGE_PROFIT_DATA = 'STORAGE_CHANGE_PROFIT_DATA';
export const STORAGE_ADD_PAYMENT_OPERATION = 'STORAGE_ADD_PAYMENT_OPERATION';
export const STORAGE_CLEAR = 'STORAGE_CLEAR';

export const setMaterialData = (data) => ({
  type: FETCH_CHANGE_MATERIAL_DATA,
  payload: data,
});

export const setUsersData = (user) => ({
  type: STORAGE_CHANGE_USER_DATA,
  payload: user,
});

export const setProfitData = (profit) => ({
  type: STORAGE_CHANGE_PROFIT_DATA,
  payload: profit,
});

export const setPaymentOperation = (payment) => ({
  type: STORAGE_ADD_PAYMENT_OPERATION,
  payload: payment,
});

export const clearStorage = () => ({
  type: STORAGE_CLEAR,
});
