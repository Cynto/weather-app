const basicDOM = (() => {
  const cssLink = document.createElement('link');
  cssLink.href = 'styles.css';
  cssLink.rel = 'stylesheet';
  document.head.appendChild(cssLink);

  const fontAwesome = document.createElement('script');
  fontAwesome.src = 'https://kit.fontawesome.com/50c63cd074.js';
  fontAwesome.crossOrigin = 'Anonymous';
  document.head.appendChild(fontAwesome);

  //creating header
  const header = document.createElement('header');
  const leftHeader = document.createElement('div');
  leftHeader.classList.add('left-header');
  const rightHeader = document.createElement('div');
  rightHeader.classList.add('right-header');
  header.appendChild(leftHeader);
  header.appendChild(rightHeader);

  //left side of header
  const logo = document.createElement('i');
  logo.classList.add('fas', 'fa-sun', 'logo');
  leftHeader.appendChild(logo);

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Weather';
  leftHeader.appendChild(title);

  const locationHeader = document.createElement('h3');
  locationHeader.classList.add('location-header');
  locationHeader.textContent = 'London, UK';
  leftHeader.appendChild(locationHeader);

  const currentTempHeader = document.createElement('h4');
  currentTempHeader.classList.add('header-temp');
  currentTempHeader.setAttribute('style', 'font-weight: bolder');
  leftHeader.appendChild(currentTempHeader);

  const weatherIcon = document.createElement('i');
  weatherIcon.classList.add('weather-icon')
  leftHeader.appendChild(weatherIcon);

  //right side of header
  const nav = document.createElement('nav');
  rightHeader.appendChild(nav);
  document.body.appendChild(header);

  const searchbarDiv = document.createElement('div');
  searchbarDiv.classList.add('search-bar-full');
  nav.appendChild(searchbarDiv);

  const searchIcon = document.createElement('i');
  searchIcon.classList.add('fas', 'fa-search', 'search-icon');
  searchbarDiv.appendChild(searchIcon);

  const searchbarForm = document.createElement('form');
  searchbarForm.classList.add('search-form');
  searchbarDiv.appendChild(searchbarForm);

  const searchInput = document.createElement('input');
  searchInput.name = 'query';
  searchInput.placeholder = 'Find Location';
  searchInput.autocomplete = 'off';
  searchInput.type = 'text';
  searchbarForm.appendChild(searchInput);

  return {
    searchInput,
    searchbarDiv,
    nav,
    searchIcon,
    searchbarForm,
    locationHeader,
    currentTempHeader,
    weatherIcon,
  };
})();
export default basicDOM;
