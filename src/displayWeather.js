import basicDOM from './basicDom';
const displayCurrentWeather = (weatherObject) => {
  const locationHeader = basicDOM.locationHeader;
  locationHeader.textContent = weatherObject.place;

  const currentTempHeader = basicDOM.currentTempHeader;
  currentTempHeader.textContent = weatherObject.currentTemp;

  const weatherIcon = basicDOM.weatherIcon;
  if (weatherObject.currentWeather === 'Clouds') {
    weatherIcon.classList.remove('fa-cloud-rain', 'far', 'fa-sun', 'sun');
    weatherIcon.classList.add('fas', 'fa-cloud');
  } else if (weatherObject.currentWeather === 'Rain') {
    weatherIcon.classList.remove('fa-cloud', 'far', 'fa-sun', 'sun');
    weatherIcon.classList.add('fas', 'fa-cloud-rain');
  } else if (weatherObject.currentWeather === 'Clear') {
    weatherIcon.classList.remove('fa-cloud', 'fas', 'fa-cloud-rain');
    weatherIcon.classList.add('far', 'fa-sun', 'sun');
  }
};
export { displayCurrentWeather };
