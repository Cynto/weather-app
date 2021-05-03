import basicDOM from './basicDom';
import { format } from 'date-fns';
import add from 'date-fns/add';

function getHourlyIcon(icon, weatherObject) {
  if (weatherObject.main === 'Clouds') {
    icon.classList.remove('fa-cloud-rain', 'far', 'fa-sun', 'sun');
    icon.classList.add('fas', 'fa-cloud', 'cloud');
  } else if (weatherObject.main === 'Rain') {
    icon.classList.remove('fa-cloud', 'far', 'fa-sun', 'sun');
    icon.classList.add('fas', 'fa-cloud-rain', 'cloud');
  } else if (weatherObject.main === 'Clear') {
    icon.classList.remove('fa-cloud', 'fas', 'fa-cloud-rain', 'cloud');
    icon.classList.add('far', 'fa-sun', 'sun');
  }
  return icon;
}

const hourlyForecast = (weatherObject) => {
  const mainContainer = basicDOM.mainContainer;
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');
  mainContainer.appendChild(weatherContainer);

  const time = format(new Date(), 'H');
  const hoursLeft = 24 - time;

  for (let i = 0; i < hoursLeft; i += 1) {
    const hourlyRowDiv = document.createElement('div');
    hourlyRowDiv.classList.add('daily-row');
    weatherContainer.appendChild(hourlyRowDiv);

    const hour = format(add(new Date(), { hours: i }), 'h a');
    const date = format(new Date(), 'd/M');

    const hourText = document.createElement('p');
    hourText.textContent = hour;
    hourText.classList.add('hour-text');
    const dateText = document.createElement('p');
    dateText.textContent = date;
    dateText.classList.add('date-text');

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('row-date-container');
    dateContainer.appendChild(hourText);
    dateContainer.appendChild(dateText);
    hourlyRowDiv.appendChild(dateContainer);

    const forecastIcon = document.createElement('i');
    const forecastIconFinish = getHourlyIcon(
      forecastIcon,
      weatherObject.hourly[i].weather[0],
    );
    hourlyRowDiv.appendChild(forecastIconFinish);

    const tempContainer = document.createElement('div');
    tempContainer.classList.add('row-temp-container');
    hourlyRowDiv.appendChild(tempContainer);

    const temp = document.createElement('h3');
    temp.textContent = Math.round(weatherObject.hourly[i].temp) + '°';
    tempContainer.appendChild(temp);

    const feelsLike = document.createElement('h4');
    feelsLike.textContent =
      'RealFeel ' + Math.round(weatherObject.hourly[i].feels_like) + '°';
    feelsLike.classList.add('hourly-feels-like');
    hourlyRowDiv.appendChild(feelsLike);

    const rainIcon = document.createElement('i');
    rainIcon.classList.add('fas', 'fa-tint', 'rain-icon');
    rainIcon.setAttribute(
      'style',
      'font-size: 15px; margin-left: 80px; width: 10px;',
    );
    hourlyRowDiv.appendChild(rainIcon);

    const precipChance = document.createElement('h4');
    precipChance.textContent =
      Math.round(weatherObject.hourly[i].pop * 100) + '%';
    hourlyRowDiv.appendChild(precipChance);
    weatherObject.hourly.splice(i, 1);
  }
  const furtherAhead = document.createElement('h2');
  furtherAhead.setAttribute(
    'style',
    'font-size: 13px; margin-left: 30px; width: 542px; border-bottom: 1px solid  #c2c2c2',
  );
  furtherAhead.textContent = 'FURTHER AHEAD';
  mainContainer.appendChild(furtherAhead);

  const tomorrowLink = document.createElement('h3');
  tomorrowLink.textContent = 'TOMORROW';
  tomorrowLink.classList.add('hourly-day-link');
  mainContainer.appendChild(tomorrowLink);

  const arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fas', 'fa-arrow-right');
  tomorrowLink.appendChild(arrowIcon);

  const time2 = format(new Date(), 'H');
  const hoursLeft2 = 24 - time;

  tomorrowLink.addEventListener('click', () => {
    console.log(hoursLeft2)
    while (weatherContainer.firstChild) {
      weatherContainer.removeChild(weatherContainer.firstChild);
    }
    tomorrowLink.setAttribute('style', 'display: none');
    for (let i = 0; i < 24; i += 1) {
      const hourlyRowDiv = document.createElement('div');
      hourlyRowDiv.classList.add('daily-row');
      weatherContainer.appendChild(hourlyRowDiv);

      const hour = format(add(new Date(), { hours: (i + hoursLeft2) }), 'h a');
      const date = format(add(new Date(), { days: 1 }), 'd/M');

      const hourText = document.createElement('p');
      hourText.textContent = hour;
      hourText.classList.add('hour-text');
      const dateText = document.createElement('p');
      dateText.textContent = date;
      dateText.classList.add('date-text');

      const dateContainer = document.createElement('div');
      dateContainer.classList.add('row-date-container');
      dateContainer.appendChild(hourText);
      dateContainer.appendChild(dateText);
      hourlyRowDiv.appendChild(dateContainer);

      const forecastIcon = document.createElement('i');
      const forecastIconFinish = getHourlyIcon(
        forecastIcon,
        weatherObject.hourly[i].weather[0],
      );
      hourlyRowDiv.appendChild(forecastIconFinish);

      const tempContainer = document.createElement('div');
      tempContainer.classList.add('row-temp-container');
      hourlyRowDiv.appendChild(tempContainer);

      const temp = document.createElement('h3');
      temp.textContent = Math.round(weatherObject.hourly[i].temp) + '°';
      tempContainer.appendChild(temp);

      const feelsLike = document.createElement('h4');
      feelsLike.textContent =
        'RealFeel ' + Math.round(weatherObject.hourly[i].feels_like) + '°';
      feelsLike.classList.add('hourly-feels-like');
      hourlyRowDiv.appendChild(feelsLike);

      const rainIcon = document.createElement('i');
      rainIcon.classList.add('fas', 'fa-tint', 'rain-icon');
      rainIcon.setAttribute(
        'style',
        'font-size: 15px; margin-left: 80px; width: 10px;',
      );
      hourlyRowDiv.appendChild(rainIcon);

      const precipChance = document.createElement('h4');
      precipChance.textContent =
        Math.round(weatherObject.hourly[i].pop * 100) + '%';
      hourlyRowDiv.appendChild(precipChance);
    }
  });
};
export default hourlyForecast;
