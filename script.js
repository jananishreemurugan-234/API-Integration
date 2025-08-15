async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "611038c4efa6f8681dd21db9e5609020"; // Replace with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("temp").textContent = data.main.temp;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = data.wind.speed;

    document.getElementById("weatherResult").classList.remove("hidden");
  } catch (error) {
    alert("Error: " + error.message);
  }
}
