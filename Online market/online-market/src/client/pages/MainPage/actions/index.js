export const STORAGE_CHANGE_PROFIT_DATA = 'STORAGE_CHANGE_PROFIT_DATA';

export const setProfitData = (profit) => ({
  type: STORAGE_CHANGE_PROFIT_DATA,
  payload: profit,
});

export const STORAGE_ADD_PAYMENT_OPERATION = 'STORAGE_ADD_PAYMENT_OPERATION';

export const setPaymentOperation = (payment) => ({
  type: STORAGE_ADD_PAYMENT_OPERATION,
  payload: payment,
});