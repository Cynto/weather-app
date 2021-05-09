export default async function getWeatherData(latitude, longitude, unit) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&APPID=3916b14217fff7a0be917af95b868464`,
    );
    const weatherData = await response.json();
    return weatherData;
  } catch {}
}
