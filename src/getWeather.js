import getWeatherData from './weatherModule';
import getCoordinates from './coordinatesModule';
import { displayWeatherHeader, displayCurrentWeather } from './displayWeather';
import dailyForecast from './dailyForecast';
import hourlyForecast from './hourlyForecast';

async function getWeather(location) {
  try {
    const coordArray = await getCoordinates(location);
    const weatherData = await getWeatherData(coordArray[0], coordArray[1]);

    const locationCap = location.charAt(0).toUpperCase() + location.slice(1);
    console.log(weatherData);
    const weatherObject = {
      place: locationCap,
      currentTemp: Math.round(weatherData.current.temp) + '°',
      currentWeather: weatherData.current.weather[0].main,
      forecast: weatherData.daily,
      realfeel: Math.round(weatherData.current.feels_like) + '°',
      hourly: weatherData.hourly,
    };
    console.log(weatherObject)

    if (document.querySelector('.nav-link-focused').id === 'now') {
      displayCurrentWeather(weatherObject);
    } else if (document.querySelector('.nav-link-focused').id === 'hourly') {
      hourlyForecast(weatherObject);
    } else {
      dailyForecast(weatherObject);
    }
    displayWeatherHeader(weatherObject);
    return weatherObject;
  } catch {
    getWeather(location);
  }
}
export default getWeather;
