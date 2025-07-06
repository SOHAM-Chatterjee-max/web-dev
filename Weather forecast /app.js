const apiKey = "49fde2cf5c9940228f860418250607";  // Your WeatherAPI.com API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {
  const cityName = cityInput.value.trim();
  if (cityName === "") {
    alert("Please enter a city name.");
    return;
  }

  console.log("Searching weather for:", cityName);

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(cityName)}`;

  console.log("API URL:", apiUrl);
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);  // See full API response

      // Display weather data inside weatherResult
      weatherResult.innerHTML = `
        <h2>Weather in ${data.location.name}</h2>
        <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}" />
        <p>Temperature: ${data.current.temp_c} °C</p>
        <p>Weather: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} kph</p>
      `;

      console.log("Weather data displayed successfully.");
    })
    .catch(error => {
      alert(error.message);
    });
});
