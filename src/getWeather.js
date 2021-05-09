import getWeatherData from './weatherModule';
import getCoordinates from './coordinatesModule';
import { displayWeatherHeader, displayCurrentWeather } from './displayWeather';
import dailyForecast from './dailyForecast';
import hourlyForecast from './hourlyForecast';

const getWeatherStorage = () => {
  const weatherObject = JSON.parse(localStorage.getItem('weatherObject'));

  if (document.querySelector('.nav-link-focused').id === 'now') {
    displayCurrentWeather(weatherObject);
  } else if (document.querySelector('.nav-link-focused').id === 'hourly') {
    hourlyForecast(weatherObject);
  } else {
    dailyForecast(weatherObject);
  }
  displayWeatherHeader(weatherObject);
};
export { getWeatherStorage };

async function getWeather(location, unit) {
  try {
    const coordArray = await getCoordinates(location);
    const weatherData = await getWeatherData(
      coordArray[0],
      coordArray[1],
      unit,
    );

    const locationCap = location.charAt(0).toUpperCase() + location.slice(1);

    const weatherObject = {
      place: locationCap,
      currentTemp: `${Math.round(weatherData.current.temp)}°`,
      currentWeather: weatherData.current.weather[0].main,
      current: weatherData.current,
      forecast: weatherData.daily,
      realfeel: `${Math.round(weatherData.current.feels_like)}°`,
      hourly: weatherData.hourly,
      cOrF: unit === 'metric' ? 'c' : 'F',
    };

    localStorage.setItem('weatherObject', JSON.stringify(weatherObject));
    getWeatherStorage();
    return weatherObject;
  } catch {
    getWeather(location, unit);
  }
}
export default getWeather;
