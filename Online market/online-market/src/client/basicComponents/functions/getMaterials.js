import { materialsAPIurl } from '../../constants';

const getMaterials = () => fetch(materialsAPIurl)
  .then((res) => res.json())
  .catch((error) => {
    alert(error);
  });
export default getMaterials;
