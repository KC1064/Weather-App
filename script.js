const apiKey = "ddfee6c3721831a356baef4606b81134";
const cityName = "Lucknow"; // Specify the city name you want to get weather data for
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

async function checkWeather() {
    try {
        const response = await fetch(apiURL);
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
        } else {
            console.error("Failed to fetch data. Status code: " + response.status);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

checkWeather();

// const apiKey= "ddfee6c3721831a356baef4606b81134";
// const apiURL= "api.openweathermap.org/data/2.5/weather?q=lucknow";
// async function checkWeather() {
//     const response = await fetch (apiURL + '&appid=${apiKey}');
//     var data = await response.json();
//     console.log(data);
// }
// checkWeather();


// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=ddfee6c3721831a356baef4606b81134