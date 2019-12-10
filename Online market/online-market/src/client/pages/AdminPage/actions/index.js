import { updateMaterialUrl, userStatus } from "../../../constants";

export const CHANGE_USERS_LIST_DATA = "CHANGE_USERS_LIST_DATA";

export const setUsersList = usersList => ({
  type: CHANGE_USERS_LIST_DATA,
  payload: usersList
});

export const UPDATE_MATERIAL_REQUEST = "UPDATE_MATERIAL_REQUEST";
export const UPDATE_MATERIAL_SUCCESS = "UPDATE_MATERIAL_SUCCESS";
export const UPDATE_MATERIAL_FAILURE = "UPDATE_MATERIAL_FAILURE";

const updateMaterialRequest = () => ({
  type: "UPDATE_MATERIAL_REQUEST"
});

const updateMaterialResponse = () => ({
  type: "UPDATE_MATERIAL_SUCCESS"
});

const updateMaterialReject = err => ({
  type: "UPDATE_MATERIAL_FAILURE",
  payload: err
});

export const updateMaterial = (admin, data) => {
  const req = { admin, data };
  return dispatch => {
    dispatch(updateMaterialRequest());
    console.log(req);
    return fetch(updateMaterialUrl, {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${req.admin.token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          dispatch(updateMaterialReject(res.errors));
        } else {
          dispatch(updateMaterialResponse());
        }
      });
  };
};

export const UPDATE_USER_STATUS_REQUEST = "UPDATE_USER_STATUS_REQUEST";
export const UPDATE_USER_STATUS_SUCCESS = "UPDATE_USER_STATUS_SUCCESS";
export const UPDATE_USER_STATUS_FAILURE = "UPDATE_USER_STATUS_FAILURE";

const updateUserStatusRequest = () => ({
  type: "UPDATE_USER_STATUS_REQUEST"
});

const updateUserStatusResponse = () => ({
  type: "UPDATE_USER_STATUS_SUCCESS"
});

const updateUserStatusReject = err => ({
  type: "UPDATE_USER_STATUS_FAILURE",
  payload: err
});

export const setUserStatus = req => {
  return dispatch => {
    dispatch(updateUserStatusRequest());
    return fetch(userStatus, {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${req.adminPassport.token}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          dispatch(updateUserStatusReject(res.errors));
        } else {
          dispatch(updateUserStatusResponse());
        }
      });
  };
};
