async function fetchWeatherData() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=37.5709908&lon=126.9789309&appid=636513d3982d6adcb22a0d4f9c9d33f3&units=metric`; // API의 엔드포인트 URL

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

export default fetchWeatherData;
