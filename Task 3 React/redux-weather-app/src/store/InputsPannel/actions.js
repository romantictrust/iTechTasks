export const INPUT_CHANGE_CITY_TEXT = "INPUT_CHANGE_CITY_TEXT";
export const SELECT_CHANGE_DAYS_AMOUNT = "SELECT_CHANGE_DAYS_AMOUNT";

export const setCity = city => ({
  type: INPUT_CHANGE_CITY_TEXT,
  payload: city
});

export const setDaysAmount = days => ({
  type: SELECT_CHANGE_DAYS_AMOUNT,
  payload: days
});
