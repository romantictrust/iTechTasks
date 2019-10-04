export const FETCH_CHANGE_USERS_LIST_DATA = "FETCH_CHANGE_USERS_LIST_DATA";

export const setUsersList = usersList => ({
    type: FETCH_CHANGE_USERS_LIST_DATA,
    payload: usersList
})