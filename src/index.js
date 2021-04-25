import getWeatherData from './weatherModule';
import { getWeather } from './getWeather';
import getCoordinates from './coordinatesModule';
import basicDOM from './basicDom'


const idk = getWeather('bridgend');
(async () => {
  console.log(await idk);
})();
