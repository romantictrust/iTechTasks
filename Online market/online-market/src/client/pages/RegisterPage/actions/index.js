import { registerUserUrl } from "../../../constants";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

const registerUserRequest = () => ({
  type: "REGISTER_USER_REQUEST"
});

const registerUserResponse = () => ({
  type: "REGISTER_USER_SUCCESS"
});

const registerUserReject = err => ({
  type: "REGISTER_USER_FAILURE",
  payload: err
});

export const reconfirmUser = user => {
  return dispatch => {
    dispatch(registerUserRequest());
    return fetch(registerUserUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          dispatch(registerUserReject(res.errors));
          return { notification: res.errors };
        } else {
          dispatch(registerUserResponse());
          return { notification: "Please, confirm your email" };
        }
      });
  };
};
