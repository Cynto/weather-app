import getWeatherData from './weatherModule';
import getWeather from './getWeather';
import getCoordinates from './coordinatesModule';
import basicDOM from './basicDom'
import searchLocation from './searchModule'
import displayCurrentWeather from './displayWeather'

const idk = getWeather('bridgend');
(async () => {
  console.log(await idk);
})();
