import { loginUserUrl, reconfirmUrl } from "../../../constants";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

const loginUserRequest = () => ({
  type: "LOGIN_USER_REQUEST"
});

const loginUserResponse = (user) => ({
  type: "LOGIN_USER_SUCCESS",
  payload: user
});

const loginUserReject = err => ({
  type: "LOGIN_USER_FAILURE",
  payload: err
});

export const loginUser = user => {
  return dispatch => {
    dispatch(loginUserRequest());
    return fetch(loginUserUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          dispatch(loginUserReject(res.errors));
        } else {
          dispatch(loginUserResponse(res));
          return res;
        }
      });
  };
};

export const RECONFIRM_USER_REQUEST = "RECONFIRM_USER_REQUEST";
export const RECONFIRM_USER_SUCCESS = "RECONFIRM_USER_SUCCESS";
export const RECONFIRM_USER_FAILURE = "RECONFIRM_USER_FAILURE";

const reconfirmRequest = () => ({
  type: "RECONFIRM_USER_REQUEST"
});

const reconfirmResponse = () => ({
  type: "RECONFIRM_USER_SUCCESS",
});

const reconfirmReject = err => ({
  type: "RECONFIRM_USER_FAILURE",
  payload: err
});

export const reconfirmUser = user => {
    return dispatch => {
      dispatch(reconfirmRequest());
      return fetch(reconfirmUrl, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.errors) {
            dispatch(reconfirmReject(res.errors));
          } else {
            dispatch(reconfirmResponse());
            return res;
          }
        });
    };
  };