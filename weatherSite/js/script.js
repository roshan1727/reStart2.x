const apiKey = "10bc5ce5cf74e8846395755377b502d6"
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "../Asset/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "../Asset/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "../Asset/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "../Asset/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "../Asset/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})