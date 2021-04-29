import getWeatherData from './weatherModule';
import getWeather from './getWeather';
import getCoordinates from './coordinatesModule';
import basicDOM from './basicDom';
import searchLocation from './searchModule';
import { displayWeatherHeader, displayCurrentWeather } from './displayWeather';
import navbar from './navbar';
import dailyForecast from './dailyForecast';


const idk = getWeather('london');

navbar.setLocation('London');
