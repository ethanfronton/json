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
      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Température : ${data.main.temp}°C</p>
                        <p>Ressenti : ${data.main.feels_like}°C</p>
                        <p>Météo : ${data.weather[0].description}</p>
                        <p>Humidité : ${data.main.humidity}%</p>
                    `;
    })
    .catch((error) => {
      document.getElementById("weather").innerHTML = `
                        <p style="color: red;">Erreur : ${error.message}</p>
                    `;
    });
}
