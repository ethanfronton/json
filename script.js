const apiKey = "acc8bdfea0afd73f2844a9d275adc256";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Veuillez entrer un nom de ville.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ville introuvable.");
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfo = {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        description: data.weather[0].description,
        humidity: data.main.humidity,
      };
      localStorage.setItem("weatherData", JSON.stringify(weatherInfo));
      window.location.href = "result.html";
    })
    .catch((error) => {
      alert(`Erreur : ${error.message}`);
    });
}