import basicDOM from './basicDom';
import getWeather from './getWeather';
import { getWeatherStorage } from './getWeather';
import navbar from './navbar';
import totalUnitFunction from './unitModule';

const searchLocation = (() => {
  const searchbarDiv = basicDOM.searchbarDiv;
  const searchInput = basicDOM.searchInput;
  const nav = basicDOM.nav;
  const searchIcon = basicDOM.searchIcon;
  const searchbarForm = basicDOM.searchbarForm;

  searchInput.addEventListener('click', () => {
    searchbarDiv.classList.remove('search-bar-full');
    searchbarDiv.classList.add('search-bar-full-big');
    searchbarDiv.setAttribute('style', 'transition: width 0.2s');
    searchInput.setAttribute('style', 'width: 250px transition: width 0.2s');
    searchIcon.setAttribute('style', 'margin-left: 20px');
  });

  document.addEventListener('click', (e) => {
    if (e.target.toString() !== '[object HTMLInputElement]') {
      nav.setAttribute('style', '');
      searchInput.setAttribute('style', '');
      searchIcon.setAttribute('style', '');
      searchbarDiv.classList.add('search-bar-full');
      searchbarDiv.classList.remove('search-bar-full-big');
      searchbarDiv.setAttribute('style', '');
    }
  });

  async function searchSubmit(location, unit) {
    try {
      const weatherObject = await getWeather(location, unit);
      navbar.setLocation(location);
      getWeatherStorage();
      return weatherObject;
    } catch {}
    return null;
  }
  searchbarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const unit = totalUnitFunction.getUnit();
    searchSubmit(searchInput.value, unit);
    searchInput.value = '';
  });
})();

export default searchLocation;
