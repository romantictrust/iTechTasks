import constants from "../constants";

export default (city = "Minsk") => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${constants.WEATHER_API_KEY}`
  )
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      alert("Wrong city");
    });
};
