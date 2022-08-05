import { fetchLocationGeo } from "./fetchData";
import { fetchWeatherData } from "./fetchData";
import { getWeatherInfo } from "./fetchData";
import "../styles/createUi.css"


const weatherInfo = async () => {

    const input = document.querySelector('#input');

    const {lat, lon} = await fetchLocationGeo(input.value);
    // console.log(lat, lon)

    const weatherData = await fetchWeatherData(lat, lon);
    console.log(weatherData);

    const weatherDataInfo = getWeatherInfo(weatherData);

    console.log(weatherDataInfo.description);

    const data = weatherDataInfo;
    
    const description = document.querySelector('.description')
    description.textContent = data.description;

    const location = document.querySelector('.location-div');
    location.textContent = `${data.city}, ${data.country}`

    const temperature = document.querySelector('.temp-div');
    temperature.textContent = `${Math.round(Math.trunc(data.temperature))}°C`;

    const feelsLike = document.querySelector('.feels-like');
    feelsLike.textContent = `feels_like: ${data.feels_like}°C`;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `humidity: ${data.humidity}%`;

    const windSpeed = document.querySelector('.wind-speed');
    windSpeed.textContent = `windSpeed: ${data.wind}Km/h`;

    return weatherDataInfo;
}


export { weatherInfo }