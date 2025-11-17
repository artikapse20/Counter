async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = "411ad6d544b5a58b621a4c5335e6c856"; 

  if (city === "") {
    document.getElementById('weatherBox').innerHTML = "<p class='info'>Please enter a city name!</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById('weatherBox').innerHTML = "<p class='info'>City not found. Try again!</p>";
      return;
    }

    document.getElementById('weatherBox').innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><b>Temperature:</b> ${data.main.temp}°C</p>
      <p><b>Condition:</b> ${data.weather[0].main}</p>
      <p><b>Humidity:</b> ${data.main.humidity}%</p>
      <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById('weatherBox').innerHTML = "<p class='info'>Error fetching weather data!</p>";
  }
}