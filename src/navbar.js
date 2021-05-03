import basicDOM from './basicDom';
import getWeather from './getWeather';

const navBar = (() => {
  const navbarArray = basicDOM.navbarArray;

  let location = 'London';
  let unit = 'metric';

  const setUnit = (value) => {
    unit = value;
  };

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
  const getLocation = () => {
    return location;
  };
  navbarArray.forEach((element) =>
    element.addEventListener('click', () => {
      getWeather(location, unit);
    }),
  );

  return { setLocation, getLocation, setUnit };
})();
export default navBar;
