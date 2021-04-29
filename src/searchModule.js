import basicDOM from './basicDom';
import getWeather from './getWeather';
import navbar from './navbar'

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
    nav.setAttribute('style', 'width: 400px; transition: width 0.2s');
    searchInput.setAttribute('style', 'width: 250px transition: width 0.2s');
    searchIcon.setAttribute('style', 'margin-left: 20px');
  });

  document.addEventListener('click', (e) => {
    console.log(e.target.toString());
    if (e.target.toString() !== '[object HTMLInputElement]') {
      nav.setAttribute('style', '');
      searchInput.setAttribute('style', '');
      searchIcon.setAttribute('style', '');
      searchbarDiv.classList.add('search-bar-full');
      searchbarDiv.classList.remove('search-bar-full-big');
      searchbarDiv.setAttribute('style', '');
    }
  });

  async function searchSubmit(location) {
    try {
      const weatherObject = await getWeather(location);
      console.log(weatherObject);
      navbar.setLocation(location);
      return weatherObject;
    } catch {}
    return null;
  }
  searchbarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchSubmit(searchInput.value);
    searchInput.value = '';
  });
})();

export default searchLocation;
