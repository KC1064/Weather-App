// const apiKey = "ddfee6c3721831a356baef4606b81134";
// const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");
// async function checkWeather(city) {
//   const response = await fetch(apiURL);
//   if (response.status == 404) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".error").style.display = "none";
//   } else {
//     var data = await response.json();

//     console.log(data);
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML =
//       Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

//     if (data.weather[0].main == "Clouds") {
//       weatherIcon.src = "assets/clouds.png";
//     } else if (data.weather[0].main == "Clear") {
//       weatherIcon.src = "assets/clear.png";
//     } else if (data.weather[0].main == "Rain") {
//       weatherIcon.src = "assets/rain.png";
//     } else if (data.weather[0].main == "Drizzle") {
//       weatherIcon.src = "assets/drizzle.png";
//     } else if (data.weather[0].main == "Mist") {
//       weatherIcon.src = "assets/mist.png";
//     }

//     document.querySelector(".weather").computedStyleMap.display = "block";
//   }

//   searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
//   });
// }

// // // https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=ddfee6c3721831a356baef4606b81134

const apiKey = "ddfee6c3721831a356baef4606b81134";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

function updateWeather(data) {
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp-273.15) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "assets/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "assets/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "assets/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "assets/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "assets/mist.png";
            break;
        default:
            weatherIcon.src = ""; // Default image or handle accordingly.
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
}

async function checkWeather(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            // Display error if city not found
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();
            updateWeather(data);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        // Handle the error (e.g., display an error message to the user).
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
