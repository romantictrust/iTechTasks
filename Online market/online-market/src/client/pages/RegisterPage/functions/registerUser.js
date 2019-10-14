import {registerUserUrl} from '../../../constants'

const registerUser = user =>
    fetch(registerUserUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          return { notification: res.errors };
        } else {
            return{ notification: "Please, confirm your email" };
        }
      });
export default registerUser;