import axios from "axios";
async function fetchForecast(cityName, error_func) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&appid=0a2710521ad65fe5bd538bb18b906851&units=metric`;
  try {
    const result = await axios.get(url);
    error_func(true);
    return result;
  } catch (err) {
    error_func(false);
  }
}

export default fetchForecast;
