import { emailReg, passRef } from "../../constants";

export function validateEmail(email) {
  if (!emailReg.test(email)) {
    return 0;
  }
  return 1;
}

export function validatePassword(password) {
  if (!passRef.test(password)) {
    return 0;
  }
  return 1;
}
