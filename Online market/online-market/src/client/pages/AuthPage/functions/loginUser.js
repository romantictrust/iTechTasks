import {loginUserUrl} from "../../../constants";

const loginUser = user =>
    fetch(loginUserUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {return res});
export default loginUser;