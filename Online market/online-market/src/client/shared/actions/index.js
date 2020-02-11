import { updateUserUrl } from "../../constants";

export const CHANGE_USER_DATA_REQUEST = "CHANGE_USER_DATA_REQUEST";
export const CHANGE_USER_DATA_SUCCESS = "CHANGE_USER_DATA_SUCCESS";
export const CHANGE_USER_DATA_FAILURE = "CHANGE_USER_DATA_FAILURE";

const changeUserRequest = () => ({
  type: "CHANGE_USER_DATA_REQUEST"
});

const changeUserResponse = () => ({
  type: "CHANGE_USER_DATA_SUCCESS"
});

const changeUserReject = err => ({
  type: "CHANGE_USER_DATA_FAILURE",
  payload: err
});

export const updateUser = user => {
  return dispatch => {
    dispatch(changeUserRequest());
    return fetch(updateUserUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${user.token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          dispatch(changeUserReject(res.errors));
        } else {
          dispatch(changeUserResponse());
        }
      });
  };
};

export const CHANGE_MATERIAL_DATA = "FETCH_CHANGE_MATERIAL_DATA";

export const setMaterialData = data => ({
  type: CHANGE_MATERIAL_DATA,
  payload: data
});

export const STORAGE_CHANGE_USER_DATA = "STORAGE_CHANGE_USER_DATA";

export const setUsersData = user => ({
  type: STORAGE_CHANGE_USER_DATA,
  payload: user
});

export const STORAGE_CLEAR = "STORAGE_CLEAR";

export const clearStorage = () => ({
  type: STORAGE_CLEAR
});
