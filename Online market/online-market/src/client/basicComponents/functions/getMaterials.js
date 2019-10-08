import { materialsAPIurl } from "../../constants";

const getMaterials = () => {
  return fetch(materialsAPIurl)
    .then(res => {
      return res.json();
    })
    .catch(error => {
      alert(error);
    });
};
export default getMaterials;
