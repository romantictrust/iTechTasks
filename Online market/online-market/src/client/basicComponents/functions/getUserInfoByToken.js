import { currentRootUrl } from '../../constants';

export const getUserByToken = (token) => fetch(currentRootUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
})
  .then((response) => response.json())
  .then((myJson) => {
    console.log(JSON.stringify(myJson));
  });
