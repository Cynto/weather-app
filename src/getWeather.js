import getWeatherData from './weatherModule';
import getCoordinates from './coordinatesModule';
import {displayCurrentWeather} from './displayWeather'

async function getWeather(location) {
  try {
    const coordArray = await getCoordinates(location);
    const weatherData = await getWeatherData(coordArray[0], coordArray[1]);

    const locationCap = location.charAt(0).toUpperCase() + location.slice(1);

    const weatherObject = {
      place: locationCap,
      currentTemp: Math.round(weatherData.current.temp) + '°c',
      currentWeather: weatherData.current.weather[0].main,
      forecast: weatherData.daily,
    };
    displayCurrentWeather(weatherObject);
    return weatherObject;
  } catch {}
}
export default getWeather;
