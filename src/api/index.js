import axios from "axios";
async function fetchForecast(cityName, error_func) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&appid={Your Api Key}&units=metric`;
  try {
    const result = await axios.get(url);
    error_func(true);
    return result;
  } catch (err) {
    error_func(false);
  }
}

export default fetchForecast;
