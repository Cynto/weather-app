import getWeatherData from './weatherModule';
import getCoordinates from './coordinatesModule';

async function getWeather(location) {
  try {
    const coordArray = await getCoordinates(location);
    const weatherData = await getWeatherData(coordArray[0], coordArray[1]);

    console.log(weatherData);
    const weatherObject = {
      currentTemp: Math.round(weatherData.current.temp),
      currentWeather: weatherData.current.weather[0].main,
      forecast: weatherData.daily,
    };
    return weatherObject;
  } catch {}
}
export { getWeather };
