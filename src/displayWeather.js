import basicDOM from './basicDom';
import { format } from 'date-fns';
import getDetailedCurrentStats from './detailedCurrentStats';
import getDetailedDailyForecast from './detailedDailyForecast'

function getIcon(icon, weatherObject) {
  if (weatherObject.currentWeather === 'Clouds') {
    icon.classList.remove('fa-cloud-rain', 'far', 'fa-sun', 'sun');
    icon.classList.add('fas', 'fa-cloud', 'cloud');
  } else if (weatherObject.currentWeather === 'Rain') {
    icon.classList.remove('fa-cloud', 'far', 'fa-sun', 'sun');
    icon.classList.add('fas', 'fa-cloud-rain', 'cloud');
  } else if (weatherObject.currentWeather === 'Clear') {
    icon.classList.remove('fa-cloud', 'fas', 'fa-cloud-rain', 'cloud');
    icon.classList.add('far', 'fa-sun', 'sun');
  }
  return icon;
}

function getForecastIcon(icon, weatherObject) {
  if (weatherObject.weather[0].main === 'Clouds') {
    icon.classList.remove('fa-cloud-rain', 'far', 'fa-sun', 'sun');
    icon.classList.add('fas', 'fa-cloud', 'cloud');
  } else if (weatherObject.weather[0].main === 'Rain') {
    icon.classList.remove('fa-cloud', 'far', 'fa-sun', 'sun');
    icon.classList.add('fas', 'fa-cloud-rain', 'cloud');
  } else if (weatherObject.weather[0].main === 'Clear') {
    icon.classList.remove('fa-cloud', 'fas', 'fa-cloud-rain', 'cloud');
    icon.classList.add('far', 'fa-sun', 'sun');
  }
  return icon;
}

const displayWeatherHeader = (weatherObject) => {
  const locationHeader = basicDOM.locationHeader;
  locationHeader.textContent = weatherObject.place;

  const currentTempHeader = basicDOM.currentTempHeader;
  currentTempHeader.textContent =
    weatherObject.currentTemp + weatherObject.cOrF;

  getIcon(basicDOM.weatherIcon, weatherObject);
};
const displayTodayForecast = (weatherObject) => {
  const mainContainer = basicDOM.mainContainer;

  const forecastDiv = document.createElement('div');
  forecastDiv.classList.add('today-forecast-div');
  mainContainer.appendChild(forecastDiv);

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  forecastDiv.appendChild(cardHeader);

  const title = document.createElement('h2');
  title.textContent = "TODAY'S WEATHER FORECAST";
  cardHeader.appendChild(title);

  const date = format(new Date(), 'd/M');

  const dateText = document.createElement('span');
  dateText.textContent = date;
  cardHeader.appendChild(dateText);

  const forecastContainer = document.createElement('div');
  forecastContainer.classList.add('forecast-container');
  forecastDiv.appendChild(forecastContainer);
  const oldIcon = document.createElement('i');
  const newIcon = getForecastIcon(oldIcon, weatherObject.forecast[0]);

  forecastContainer.appendChild(newIcon);

  const highTemp = document.createElement('h3');
  highTemp.textContent = Math.round(weatherObject.forecast[0].temp.max) + '°';
  forecastContainer.appendChild(highTemp);

  const realFeel = document.createElement('div');
  realFeel.textContent =
    'RealFeel ' + Math.round(weatherObject.forecast[0].feels_like.day) + '°';
  realFeel.classList.add('real-feel');
  forecastDiv.appendChild(realFeel);

  const spacedContent = document.createElement('div');
  spacedContent.classList.add('spaced-content');
  forecastDiv.appendChild(spacedContent);

  const currentWeather = document.createElement('h3');
  currentWeather.textContent = weatherObject.forecast[0].weather[0].main;
  spacedContent.appendChild(currentWeather);

  const moreDetails = document.createElement('h2');
  moreDetails.textContent = 'MORE DETAILS ->';
  spacedContent.appendChild(moreDetails);

  moreDetails.addEventListener('click', () => {
    getDetailedDailyForecast(weatherObject, newIcon, 0)
  })
};
const displayCurrentWeather = (weatherObject) => {
  const mainContainer = basicDOM.mainContainer;

  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  const currentWeatherDiv = document.createElement('div');
  currentWeatherDiv.classList.add('current-weather-div');
  mainContainer.appendChild(currentWeatherDiv);

  const currentWeatherTitle = document.createElement('h2');
  currentWeatherTitle.classList.add('current-weather-title');
  currentWeatherTitle.textContent = 'CURRENT WEATHER';
  currentWeatherDiv.appendChild(currentWeatherTitle);

  const currentDate = format(new Date(), 'p');

  const currentDateDisplay = document.createElement('p');
  currentDateDisplay.textContent = currentDate;
  currentDateDisplay.classList.add('current-time');
  currentWeatherDiv.appendChild(currentDateDisplay);

  const tempContainer = document.createElement('div');
  tempContainer.classList.add('temp-container');
  currentWeatherDiv.appendChild(tempContainer);

  let weatherIcon = document.createElement('i');
  weatherIcon = getIcon(weatherIcon, weatherObject);
  tempContainer.appendChild(weatherIcon);

  const currentTemp = document.createElement('div');
  currentTemp.textContent = weatherObject.currentTemp;
  currentTemp.classList.add('current-temp');
  tempContainer.appendChild(currentTemp);
  const c = document.createElement('span');
  c.textContent = weatherObject.cOrF;
  currentTemp.appendChild(c);

  const realFeel = document.createElement('div');
  realFeel.textContent = 'RealFeel ' + weatherObject.realfeel;
  realFeel.classList.add('real-feel');
  currentWeatherDiv.appendChild(realFeel);

  const spacedContent = document.createElement('div');
  spacedContent.classList.add('spaced-content');
  currentWeatherDiv.appendChild(spacedContent);

  const currentWeather = document.createElement('h3');
  currentWeather.textContent = weatherObject.currentWeather;
  spacedContent.appendChild(currentWeather);

  const moreDetails = document.createElement('h2');
  moreDetails.textContent = 'MORE DETAILS ->';
  spacedContent.appendChild(moreDetails);

  moreDetails.addEventListener('click', () => {
    getDetailedCurrentStats(weatherObject, weatherIcon);
  } );

  displayTodayForecast(weatherObject);
};

export { displayWeatherHeader, displayCurrentWeather, getIcon };
