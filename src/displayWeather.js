import basicDOM from './basicDom';
import { format } from 'date-fns';

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

const displayWeatherHeader = (weatherObject) => {
  const locationHeader = basicDOM.locationHeader;
  locationHeader.textContent = weatherObject.place;

  const currentTempHeader = basicDOM.currentTempHeader;
  currentTempHeader.textContent = weatherObject.currentTemp + 'c';

  getIcon(basicDOM.weatherIcon, weatherObject);
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
  c.textContent = 'c';
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
};


export { displayWeatherHeader, displayCurrentWeather, getIcon };
