import basicDOM from './basicDom';
import navbar from './navbar';
import getWeather from './getWeather';

const totalUnitFunction = (() => {
  const navContainer = basicDOM.nav;

  const unitButton = document.createElement('button');

  const celcius = document.createElement('span');
  unitButton.appendChild(celcius);
  celcius.classList.add('chosen-unit');
  celcius.textContent = '°C';
  celcius.id = 'c';

  const slash = document.createElement('span');
  slash.textContent = ' / ';
  unitButton.appendChild(slash);

  const fahrenheit = document.createElement('span');
  unitButton.appendChild(fahrenheit);
  fahrenheit.textContent = '°F';
  fahrenheit.id = 'f';
  navContainer.appendChild(unitButton);

  let unit = 'metric';

  let location = navbar.getLocation();

  unitButton.addEventListener('click', () => {
    location = navbar.getLocation();
    const chosenUnit = document.querySelector('.chosen-unit');
    if (chosenUnit.id === 'c') {
      unit = 'imperial';
      celcius.classList.remove('chosen-unit');
      fahrenheit.classList.add('chosen-unit');
    } else {
      unit = 'metric';
      fahrenheit.classList.remove('chosen-unit');
      celcius.classList.add('chosen-unit');
    }
    navbar.setUnit(unit);
    getWeather(location, unit);
  });
  const getUnit = () => {
    return unit;
  };
  getWeather(location, unit);
  return { getUnit };
})();
export default totalUnitFunction;
