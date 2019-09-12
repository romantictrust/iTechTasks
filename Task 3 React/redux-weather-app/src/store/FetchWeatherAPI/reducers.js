import { FETCH_WEATHER_API_DATA } from "./actions";

const defaultState = {
  weatherData: {}
};

const fetchedDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_API_DATA:
      return { ...state, weatherData: action.payload };
  }
  return state;
};
export default fetchedDataReducer;
