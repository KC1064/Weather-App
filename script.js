const apiKey= "d18f9911f80cf5b7b2475510271d8495";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=delhi";
async function checkWeather() {
    const response = await fetch (apiURL + '&appid=${apiKey}');
    var data = await response.json();
    console.log(data);
}
checkWeather();


// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=ddfee6c3721831a356baef4606b81134