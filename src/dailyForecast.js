import basicDOM from './basicDom';
import { format } from 'date-fns';
import add from 'date-fns/add';
import getDetailedDailyForecast from './detailedDailyForecast';

function getRowIcon(icon, weatherObject) {
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

const dailyForecast = (weatherObject) => {
  const mainContainer = basicDOM.mainContainer;
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  const currentDate = format(new Date(), 'MMMM c');
  const futureDate = format(add(new Date(), { days: 8 }), 'MMMM c');

  const dateSpan = document.createElement('p');
  dateSpan.textContent = currentDate + ' - ' + futureDate;
  dateSpan.classList.add('date-span');
  mainContainer.appendChild(dateSpan);

  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');
  mainContainer.appendChild(weatherContainer);

  const forecast = weatherObject.forecast;
  for (let i = 0; i < forecast.length; i += 1) {
    const dailyRowDiv = document.createElement('div');
    dailyRowDiv.classList.add('daily-row');
    weatherContainer.appendChild(dailyRowDiv);

    const day = format(add(new Date(), { days: i }), 'E');
    const date = format(add(new Date(), { days: i }), 'd/M');

    const dayText = document.createElement('p');
    dayText.textContent = day;
    dayText.classList.add('day-text');
    const dateText = document.createElement('p');
    dateText.textContent = date;
    dateText.classList.add('date-text');

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('row-date-container');
    dateContainer.appendChild(dayText);
    dateContainer.appendChild(dateText);
    dailyRowDiv.appendChild(dateContainer);

    const forecastIcon = document.createElement('i');
    const forecastIconFinish = getRowIcon(
      forecastIcon,
      weatherObject.forecast[i].weather[0],
    );
    dailyRowDiv.appendChild(forecastIconFinish);

    const tempContainer = document.createElement('div');
    tempContainer.classList.add('row-temp-container');
    dailyRowDiv.appendChild(tempContainer);

    const highestTemp = document.createElement('h3');
    highestTemp.textContent =
      Math.round(weatherObject.forecast[i].temp.max) + '°';
    tempContainer.appendChild(highestTemp);

    const smallestTemp = document.createElement('h4');
    smallestTemp.textContent =
      '/' + Math.round(weatherObject.forecast[i].temp.min) + '°';
    tempContainer.appendChild(smallestTemp);

    const rainIcon = document.createElement('i');
    rainIcon.classList.add('fas', 'fa-tint', 'rain-icon');
    rainIcon.setAttribute('style', 'font-size: 15px; margin-left: 160px; width: 10px;');
    dailyRowDiv.appendChild(rainIcon);

    const precipChance = document.createElement('h4');
    precipChance.textContent = Math.round((weatherObject.forecast[i].pop * 100)) + '%';
    dailyRowDiv.appendChild(precipChance);

    dailyRowDiv.addEventListener('click', () => {
      getDetailedDailyForecast(weatherObject, forecastIconFinish, i)
    })
  }
};
export default dailyForecast;
