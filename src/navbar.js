import basicDOM from './basicDom';
import getWeather from './getWeather';

const navBar = (() => {
  const navbarArray = basicDOM.navbarArray;

  let location = '';

  navbarArray.forEach((element) =>
    element.addEventListener('click', () => {
      navbarArray.forEach((element) =>
        element.classList.remove('nav-link-focused'),
      );
      navbarArray.forEach((element) => element.classList.add('nav-link'));
      element.classList.add('nav-link-focused');
      element.classList.remove('nav-link');
    }),
  );
  const setLocation = (place) => {
    location = place;
    return location;
  };
  navbarArray.forEach((element) =>
    element.addEventListener('click', () => {
      getWeather(location);
    }),
  );

  return { setLocation };
})();
export default navBar;
