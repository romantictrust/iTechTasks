export const materialsAPIurl = "http://localhost:8000/api/materials";
export const registerUserUrl = "http://localhost:8000/api/users";
export const loginUserUrl = "http://localhost:8000/api/users/login";
export const currentRootUrl = "http://localhost:8000/api/users/current";
export const reconfirmUrl = "http://localhost:8000/api/users/reconfirm";
export const updateUrl = "http://localhost:8000/api/users/update";
export const usersListUrl = "http://localhost:8000/admin/usersList";
export const userStatus = "http://localhost:8000/admin/userStatus";
export const updateMaterialUrl = "http://localhost:8000/api/materials/update";

export const emailReg = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export const passRef = new RegExp(/^(?=.*\d)[0-9a-z]{7,}$/);
//   (?=.*\d)          // should contain at least one digit
//   (?=.*[a-z])       // should contain at least one lower case
//   [a-zA-Z0-9]{7,}   // should contain at least 8 from the mentioned characters

export const altUser = {
  id: "test",
  balance: 10000,
  materials: [
    {
      material: "Wood",
      amount: 25,
      cost: 12
    },
    {
      material: "Iron",
      amount: 50,
      cost: 34
    },
    {
      material: "Oil",
      amount: 25,
      cost: 26
    }
  ],
  orders: []
};
