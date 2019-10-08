import { userStatus } from "../../../constants";

const setUserStatus = req => {
  return fetch(userStatus, {
    method: "POST",
    body: JSON.stringify(req),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + req.adminPassport.token
    }
  })
    .then(res => {
      if (res.status >= 400) {
        alert("Token not found");
      }
      return res.json();
    })
};

const blockUser = req => {
  if (req.userTarget.status) {
    return setUserStatus(req).then(
      alert(`User with id ${req.userTarget.id} has been blocked`)
    );
  } else {
    return setUserStatus(req).then(
      alert(`User with id ${req.userTarget.id} has been unblocked`)
    );
  }
};

export default blockUser;
