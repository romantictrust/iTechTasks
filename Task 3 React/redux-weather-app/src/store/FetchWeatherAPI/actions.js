export const FETCH_WEATHER_API_DATA = "FETCH_WEATHER_API_DATA";

export const setWeatherData = weatherData => ({
    type: FETCH_WEATHER_API_DATA,
    payload: weatherData
})
