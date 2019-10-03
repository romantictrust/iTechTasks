import { reconfirmUrl } from "../../../constants";

const sendConfirmation = (user) => {
        return fetch(reconfirmUrl, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json"
          }
        })
      };
export default sendConfirmation;
