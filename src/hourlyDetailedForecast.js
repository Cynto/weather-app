import { format } from 'date-fns';
import basicDOM from './basicDom';
import hourlyForecast from './hourlyForecast';

const getDetailedHourlyForecast = (
  weatherObject,
  hour,
  hourlyRowDiv,
  dateContainer,
  forecastIcon,
  tempContainer,
  feelsLike,
  rainIcon,
  precipChance,
) => {
  if (hourlyRowDiv.classList.contains('detailed-hourly') === false) {
    const mainContainer = basicDOM.mainContainer;
    hourlyRowDiv.classList.add('detailed-hourly');
    hourlyRowDiv.classList.remove('daily-row');

    const newHourlyRow = document.createElement('div');
    newHourlyRow.classList.add('new-daily-row');
    newHourlyRow.appendChild(dateContainer);
    newHourlyRow.appendChild(forecastIcon);
    newHourlyRow.appendChild(tempContainer);
    newHourlyRow.appendChild(feelsLike);
    newHourlyRow.appendChild(rainIcon);
    newHourlyRow.appendChild(precipChance);
    hourlyRowDiv.appendChild(newHourlyRow);

    const statsContainer = document.createElement('div');
    statsContainer.classList.add('hourly-stats-container');
    hourlyRowDiv.appendChild(statsContainer);

    const innerStatsContainer = document.createElement('div');
    innerStatsContainer.classList.add('hourly-inner-container');
    statsContainer.appendChild(innerStatsContainer);

    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('detailed-hourly-spaced');
    const currentWeather = document.createElement('h4');
    currentWeather.textContent = weatherObject.hourly[hour].weather[0].main;
    weatherDiv.appendChild(currentWeather);
    innerStatsContainer.appendChild(weatherDiv);

    const uvIndexDiv = document.createElement('div');
    uvIndexDiv.classList.add('detailed-hourly-spaced');
    const uvIndexTitle = document.createElement('h4');
    uvIndexTitle.textContent = 'Max UV Index';
    uvIndexDiv.appendChild(uvIndexTitle);
    const uvIndexValue = document.createElement('p');
    uvIndexValue.textContent = Math.round(weatherObject.hourly[hour].uvi);
    uvIndexDiv.appendChild(uvIndexValue);
    innerStatsContainer.appendChild(uvIndexDiv);

    const windDiv = document.createElement('div');
    windDiv.classList.add('detailed-hourly-spaced');
    const windTitle = document.createElement('h4');
    windTitle.textContent = 'Wind';
    windDiv.appendChild(windTitle);
    const windValue = document.createElement('p');
    windValue.textContent =
      Math.round(weatherObject.hourly[hour].wind_speed) + 'km/h';
    windDiv.appendChild(windValue);
    innerStatsContainer.appendChild(windDiv);

    const windGustDiv = document.createElement('div');
    windGustDiv.classList.add('detailed-hourly-spaced');
    const windGustTitle = document.createElement('h4');
    windGustTitle.textContent = 'Wind Gusts';
    windGustDiv.appendChild(windGustTitle);
    const windGustValue = document.createElement('p');
    windGustValue.textContent =
      Math.round(weatherObject.hourly[hour].wind_gust) + 'km/h';
    windGustDiv.appendChild(windGustValue);
    innerStatsContainer.appendChild(windGustDiv);

    const cloudDiv = document.createElement('div');
    cloudDiv.classList.add('detailed-hourly-spaced');
    const cloudTitle = document.createElement('h4');
    cloudTitle.textContent = 'Cloud Cover';
    cloudDiv.appendChild(cloudTitle);
    const cloudValue = document.createElement('p');
    cloudValue.textContent = weatherObject.hourly[hour].clouds + '%';
    cloudDiv.appendChild(cloudValue);
    innerStatsContainer.appendChild(cloudDiv);

    const humidityDiv = document.createElement('div');
    humidityDiv.classList.add('detailed-hourly-spaced');
    const humidityTitle = document.createElement('h4');
    humidityTitle.textContent = 'Humidity';
    humidityDiv.appendChild(humidityTitle);
    const humidityValue = document.createElement('p');
    humidityValue.textContent =
      Math.round(weatherObject.hourly[hour].humidity) + '%';
    humidityDiv.appendChild(humidityValue);
    innerStatsContainer.appendChild(humidityDiv);

    const popDiv = document.createElement('div');
    popDiv.classList.add('detailed-hourly-spaced');
    const popTitle = document.createElement('h4');
    popTitle.textContent = 'Probability of Precipitation';
    popDiv.appendChild(popTitle);
    const popValue = document.createElement('p');
    popValue.textContent =
      Math.round(weatherObject.hourly[hour].pop) * 100 + '%';
    popDiv.appendChild(popValue);
    innerStatsContainer.appendChild(popDiv);
  
    const pressureDiv = document.createElement('div');
    pressureDiv.classList.add('detailed-hourly-spaced');
    const pressureTitle = document.createElement('h4');
    pressureTitle.textContent = 'Pressure';
    pressureDiv.appendChild(pressureTitle);
    const pressureValue = document.createElement('p');
    pressureValue.textContent = weatherObject.hourly[hour].pressure + ' mb';
    pressureDiv.appendChild(pressureValue);
    innerStatsContainer.appendChild(pressureDiv);

    const visibilityDiv = document.createElement('div');
    visibilityDiv.classList.add('detailed-hourly-spaced');
    const visiblityTitle = document.createElement('h4');
    visiblityTitle.textContent = 'Visibility';
    visibilityDiv.appendChild(visiblityTitle);
    const visibilityValue = document.createElement('p');
    visibilityValue.textContent =
      weatherObject.hourly[hour].visibility / 1000 + ' km';
    visibilityDiv.appendChild(visibilityValue);
    innerStatsContainer.appendChild(visibilityDiv);

    hourlyRowDiv.addEventListener('click', () => {
      if (hourlyRowDiv.classList.contains('done')) {
        hourlyRowDiv.classList.remove('done');
      }
    });

    newHourlyRow.addEventListener('click', () => {
      newHourlyRow.remove();
      statsContainer.remove();
      while (hourlyRowDiv.firstChild) {
        hourlyRowDiv.removeChild(hourlyRowDiv.firstChild);
      }

      hourlyRowDiv.classList.add('daily-row', 'done');
      hourlyRowDiv.classList.remove('detailed-hourly');
      console.log(hourlyRowDiv.classList);
      hourlyRowDiv.appendChild(dateContainer);
      hourlyRowDiv.appendChild(forecastIcon);
      hourlyRowDiv.appendChild(tempContainer);
      hourlyRowDiv.appendChild(feelsLike);
      hourlyRowDiv.appendChild(rainIcon);
      hourlyRowDiv.appendChild(precipChance);
    });
  }
};
export default getDetailedHourlyForecast;
