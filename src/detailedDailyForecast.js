import { format } from 'date-fns';
import add from 'date-fns/add';
import basicDOM from './basicDom';

const getDetailedDailyForecast = (weatherObject, weatherIcon, day) => {
  const mainContainer = basicDOM.mainContainer;

  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  const arrowAndDateContainer = document.createElement('div');
  arrowAndDateContainer.classList.add('arrow-date-container');
  mainContainer.appendChild(arrowAndDateContainer);

  const previousDay = document.createElement('i');
  arrowAndDateContainer.appendChild(previousDay);

  if (day !== 0) {
    previousDay.classList.add('fas', 'fa-arrow-left');

    previousDay.addEventListener('click', () => {
      day -= 1;
      getDetailedDailyForecast(weatherObject, weatherIcon, day);
    });
  } else previousDay.classList.remove('fas', 'fa-arrow-left');

  let date = format(add(new Date(), { days: day }), 'EEEE, MMMM d');
  date = date.toUpperCase();
  const dateText = document.createElement('h3');
  dateText.setAttribute('style', '');
  dateText.classList.add('detailed-date');
  dateText.textContent = date;
  arrowAndDateContainer.appendChild(dateText);

  const nextDay = document.createElement('i');
  arrowAndDateContainer.appendChild(nextDay);

  if (day !== 7) {
    nextDay.classList.add('fas', 'fa-arrow-right');

    nextDay.addEventListener('click', () => {
      day += 1;
      getDetailedDailyForecast(weatherObject, weatherIcon, day);
    });
  } else nextDay.classList.remove('fas', 'fa-arrow-right');

  const detailedCard = document.createElement('div');
  detailedCard.classList.add('detailed-card');
  mainContainer.appendChild(detailedCard);

  const detailedCardInner = document.createElement('div');
  detailedCardInner.classList.add('detailed-card-inner');
  detailedCard.appendChild(detailedCardInner);

  const titleAndTimeContainer = document.createElement('div');
  titleAndTimeContainer.classList.add('title-time-container');
  const title = document.createElement('h2');
  title.textContent = 'DAY';
  titleAndTimeContainer.appendChild(title);

  const time = format(add(new Date(), { days: day }), 'd/M');
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
  currentTemp.textContent =
    Math.round(weatherObject.forecast[day].temp.max) + '°';
  currentTemp.classList.add('current-temp-detailed');
  iconAndTempContainer.appendChild(currentTemp);

  const currentUnit = document.createElement('span');
  currentUnit.textContent = weatherObject.cOrF;
  currentTemp.appendChild(currentUnit);

  const realFeel = document.createElement('p');
  realFeel.textContent =
    'RealFeel ' + Math.round(weatherObject.forecast[day].feels_like.day) + '°';
  realFeel.setAttribute(
    'style',
    'display: flex; align-items: center; font-weight: bold',
  );
  innerTopContainer.appendChild(realFeel);

  const weatherPhrase = document.createElement('p');
  weatherPhrase.textContent = weatherObject.forecast[day].weather[0].main;
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
  uvIndexTitle.textContent = 'Max UV Index';
  uvIndexDiv.appendChild(uvIndexTitle);
  const uvIndexValue = document.createElement('p');
  uvIndexValue.textContent = Math.round(weatherObject.forecast[day].uvi);
  uvIndexDiv.appendChild(uvIndexValue);
  leftStatsContainer.appendChild(uvIndexDiv);

  const windDiv = document.createElement('div');
  windDiv.classList.add('detailed-spaced-content');
  const windTitle = document.createElement('h4');
  windTitle.textContent = 'Wind';
  windDiv.appendChild(windTitle);
  const windValue = document.createElement('p');
  windValue.textContent =
    Math.round(weatherObject.forecast[day].wind_speed) + 'km/h';
  windDiv.appendChild(windValue);
  leftStatsContainer.appendChild(windDiv);

  const windGustDiv = document.createElement('div');
  windGustDiv.classList.add('detailed-spaced-content');
  const windGustTitle = document.createElement('h4');
  windGustTitle.textContent = 'Wind Gusts';
  windGustDiv.appendChild(windGustTitle);
  const windGustValue = document.createElement('p');
  windGustValue.textContent =
    Math.round(weatherObject.forecast[day].wind_gust) + 'km/h';
  windGustDiv.appendChild(windGustValue);
  leftStatsContainer.appendChild(windGustDiv);

  const cloudDiv = document.createElement('div');
  cloudDiv.classList.add('detailed-spaced-content');
  const cloudTitle = document.createElement('h4');
  cloudTitle.textContent = 'Cloud Cover';
  cloudDiv.appendChild(cloudTitle);
  const cloudValue = document.createElement('p');
  cloudValue.textContent = weatherObject.forecast[day].clouds + '%';
  cloudDiv.appendChild(cloudValue);
  leftStatsContainer.appendChild(cloudDiv);

  const rightStatsContainer = document.createElement('div');
  statsContainer.appendChild(rightStatsContainer);
  rightStatsContainer.classList.add('right-stats-container');

  const humidityDiv = document.createElement('div');
  humidityDiv.classList.add('detailed-spaced-content');
  const humidityTitle = document.createElement('h4');
  humidityTitle.textContent = 'Humidity';
  humidityDiv.appendChild(humidityTitle);
  const humidityValue = document.createElement('p');
  humidityValue.textContent =
    Math.round(weatherObject.forecast[day].humidity) + '%';
  humidityDiv.appendChild(humidityValue);
  rightStatsContainer.appendChild(humidityDiv);

  const popDiv = document.createElement('div');
  popDiv.classList.add('detailed-spaced-content');
  const popTitle = document.createElement('h4');
  popTitle.textContent = 'Probability of Precipitation';
  popDiv.appendChild(popTitle);
  const popValue = document.createElement('p');
  popValue.textContent =
    Math.round(weatherObject.forecast[day].pop) * 100 + '%';
  popDiv.appendChild(popValue);
  rightStatsContainer.appendChild(popDiv);

  const rainDiv = document.createElement('div');
  rainDiv.classList.add('detailed-spaced-content');
  const rainTitle = document.createElement('h4');
  rainTitle.textContent = 'Rain';
  rainDiv.appendChild(rainTitle);
  const rainValue = document.createElement('p');
  rainValue.textContent =
    Math.round(weatherObject.forecast[day].rain * 10) / 10 + ' mm';
  rainDiv.appendChild(rainValue);
  rightStatsContainer.appendChild(rainDiv);

  const pressureDiv = document.createElement('div');
  pressureDiv.classList.add('detailed-spaced-content');
  const pressureTitle = document.createElement('h4');
  pressureTitle.textContent = 'Pressure';
  pressureDiv.appendChild(pressureTitle);
  const pressureValue = document.createElement('p');
  pressureValue.textContent = weatherObject.forecast[day].pressure + ' mb';
  pressureDiv.appendChild(pressureValue);
  rightStatsContainer.appendChild(pressureDiv);
};
export default getDetailedDailyForecast;
