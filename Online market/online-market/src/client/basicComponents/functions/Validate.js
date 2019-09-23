import { emailReg, passRef } from '../../constants';

export function validateEmail(email) {
  if (!emailReg.test(email)) {
    alert("Wrong email");
    throw new Error(`Invalid email`);
  }
}

export function validatePassword(password) {
  if (!passRef.test(password)) {
    alert("Wrong password");
    throw new Error(`Invalid password`);
  }
}
