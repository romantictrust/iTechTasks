export const CHANGE_USERS_LIST_DATA = 'CHANGE_USERS_LIST_DATA';

export const setUsersList = (usersList) => ({
  type: CHANGE_USERS_LIST_DATA,
  payload: usersList,
});
