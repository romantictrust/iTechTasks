import { updateUrl } from "../../../constants";

const updateUser = user => {
  return fetch(updateUrl, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => {
      let currentUser = {...JSON.parse(sessionStorage.getItem("user"))};
      currentUser.materials = res.materials;
      currentUser.balance = res.balance;
      currentUser.materials = res.materials;
      sessionStorage.setItem("user", JSON.stringify(currentUser));
    });
};

export default updateUser;
