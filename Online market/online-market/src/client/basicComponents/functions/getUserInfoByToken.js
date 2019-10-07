import { currentRootUrl } from '../../constants';

export const getUserByToken = token => {
  return fetch(currentRootUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + token
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
};
