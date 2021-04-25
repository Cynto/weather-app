import getWeatherData from './weatherModule';

export default async function getCoordinates(location) {
  try {
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=e1ac105a4456be2d9e8b62718e4f0bb3&query=${location}`,
    );
    const coordinates = await response.json();
    const latCord = coordinates.data[0].latitude;
    const longCord = coordinates.data[0].longitude;
    const coordArray = [latCord, longCord];
    return coordArray;
  } catch {}
}
