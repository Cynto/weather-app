import { format } from 'date-fns';
import basicDOM from './basicDom';

const getDetailedCurrentStats = (weatherObject, weatherIcon) => {
  const mainContainer = basicDOM.mainContainer;

  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  let date = format(new Date(), 'EEEE, MMMM d');
  date = date.toUpperCase();
  const dateText = document.createElement('h3');
  dateText.setAttribute('style', '');
  dateText.classList.add('detailed-date');
  dateText.textContent = date;
  mainContainer.appendChild(dateText);

  const detailedCard = document.createElement('div');
  detailedCard.classList.add('detailed-card');
  mainContainer.appendChild(detailedCard);

  const detailedCardInner = document.createElement('div');
  detailedCardInner.classList.add('detailed-card-inner');
  detailedCard.appendChild(detailedCardInner);

  const titleAndTimeContainer = document.createElement('div');
  titleAndTimeContainer.classList.add('title-time-container');
  const title = document.createElement('h2');
  title.textContent = 'CURRENT WEATHER';
  titleAndTimeContainer.appendChild(title);

  const time = format(new Date(), 'h:m a');
  const timeText = document.createElement('p');
  timeText.textContent = time;
  titleAndTimeContainer.appendChild(timeText);
  detailedCardInner.appendChild(titleAndTimeContainer);

  const innerTopContainer = document.createElement('div');
  innerTopContainer.setAttribute(
    'style',
    'display: flex; width: 100%; margin-bottom: 12px;',
  );
  detailedCardInner.appendChild(innerTopContainer);

  const iconAndTempContainer = document.createElement('div');
  iconAndTempContainer.classList.add('icon-temp-container');
  innerTopContainer.appendChild(iconAndTempContainer);

  iconAndTempContainer.appendChild(weatherIcon);

  const currentTemp = document.createElement('div');
  currentTemp.textContent = weatherObject.currentTemp;
  currentTemp.classList.add('current-temp-detailed');
  iconAndTempContainer.appendChild(currentTemp);

  const currentUnit = document.createElement('span');
  currentUnit.textContent = weatherObject.cOrF;
  currentTemp.appendChild(currentUnit);

  const realFeel = document.createElement('p');
  realFeel.textContent = 'RealFeel ' + weatherObject.realfeel;
  realFeel.setAttribute(
    'style',
    'display: flex; align-items: center; font-weight: bold',
  );
  innerTopContainer.appendChild(realFeel);

  const weatherPhrase = document.createElement('p');
  weatherPhrase.textContent = weatherObject.currentWeather;
  weatherPhrase.setAttribute('style', 'width: 100%; margin-bottom: 24px;');
  detailedCardInner.appendChild(weatherPhrase);

  const statsContainer = document.createElement('div');
  detailedCardInner.appendChild(statsContainer);
  statsContainer.classList.add('current-stats-container');

  const leftStatsContainer = document.createElement('div');
  statsContainer.appendChild(leftStatsContainer);
  leftStatsContainer.classList.add('left-stats-container');

  const uvIndexDiv = document.createElement('div');
  uvIndexDiv.classList.add('detailed-spaced-content');
  const uvIndexTitle = document.createElement('h4');
  uvIndexTitle.textContent = 'UV Index';
  uvIndexDiv.appendChild(uvIndexTitle);
  const uvIndexValue = document.createElement('p');
  uvIndexValue.textContent = Math.round(weatherObject.current.uvi);
  uvIndexDiv.appendChild(uvIndexValue);
  leftStatsContainer.appendChild(uvIndexDiv);

  const windDiv = document.createElement('div');
  windDiv.classList.add('detailed-spaced-content');
  const windTitle = document.createElement('h4');
  windTitle.textContent = 'Wind Speed';
  windDiv.appendChild(windTitle);
  const windValue = document.createElement('p');
  windValue.textContent = Math.round(weatherObject.current.wind_speed) + 'km/h';
  windDiv.appendChild(windValue);
  leftStatsContainer.appendChild(windDiv);

  const visibilityDiv = document.createElement('div');
  visibilityDiv.classList.add('detailed-spaced-content');
  const visiblityTitle = document.createElement('h4');
  visiblityTitle.textContent = 'Visibility';
  visibilityDiv.appendChild(visiblityTitle);
  const visibilityValue = document.createElement('p');
  visibilityValue.textContent = weatherObject.current.visibility / 1000 + ' km';
  visibilityDiv.appendChild(visibilityValue);
  leftStatsContainer.appendChild(visibilityDiv);

  const rightStatsContainer = document.createElement('div');
  statsContainer.appendChild(rightStatsContainer);
  rightStatsContainer.classList.add('right-stats-container');

  const humidityDiv = document.createElement('div');
  humidityDiv.classList.add('detailed-spaced-content');
  const humidityTitle = document.createElement('h4');
  humidityTitle.textContent = 'Humidity';
  humidityDiv.appendChild(humidityTitle);
  const humidityValue = document.createElement('p');
  humidityValue.textContent = Math.round(weatherObject.current.humidity) + '%';
  humidityDiv.appendChild(humidityValue);
  rightStatsContainer.appendChild(humidityDiv);

  const pressureDiv = document.createElement('div');
  pressureDiv.classList.add('detailed-spaced-content');
  const pressureTitle = document.createElement('h4');
  pressureTitle.textContent = 'Pressure';
  pressureDiv.appendChild(pressureTitle);
  const pressureValue = document.createElement('p');
  pressureValue.textContent = weatherObject.current.pressure + ' mb';
  pressureDiv.appendChild(pressureValue);
  rightStatsContainer.appendChild(pressureDiv);

  const cloudDiv = document.createElement('div');
  cloudDiv.classList.add('detailed-spaced-content');
  const cloudTitle = document.createElement('h4');
  cloudTitle.textContent = 'Cloud Cover';
  cloudDiv.appendChild(cloudTitle);
  const cloudValue = document.createElement('p');
  cloudValue.textContent = weatherObject.current.clouds + '%';
  cloudDiv.appendChild(cloudValue);
  rightStatsContainer.appendChild(cloudDiv);
};
export default getDetailedCurrentStats;
