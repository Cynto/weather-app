import getWeatherData from './weatherModule';

export default async function getCoordinates(location) {
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=09c7d8c0f2594d4c863e92ae403780f7`,
    );
    const coordinates = await response.json();
    const latCord = coordinates.results[0].geometry.lat;
    const longCord = coordinates.results[0].geometry.lng;
    const coordArray = [latCord, longCord];
    return coordArray;
  } catch {
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=e1ac105a4456be2d9e8b62718e4f0bb3&query=${location}`,
    );
    const coordinates = await response.json();
    console.log(coordinates.results[0].geometry)
    const latCord = coordinates.data[0].latitude;
    const longCord = coordinates.data[0].longitude;
    const coordArray = [latCord, longCord];
    return coordArray;
  }
}
