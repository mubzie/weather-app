import { fetchLocationGeo } from "./fetchData";
import { fetchWeatherData } from "./fetchData";
import { getWeatherInfo } from "./fetchData";

let city = "London";

const weatherInfo = async () => {

    const {lat, lon} = await fetchLocationGeo(city);
    // console.log(lat, lon)

    const weatherData = await fetchWeatherData(lat, lon);
    console.log(weatherData);

    const weatherDataInfo = getWeatherInfo(weatherData);

    console.log(weatherDataInfo.description);

    return weatherDataInfo;
}

const createUi = async () => {
    const data = await weatherInfo();

    // PAGE HEADER >>>>>>>>>>>>>>>>>>>>
    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = "Weather App";

    // PAGE MAIN CONTAINER >>>>>>>>>>>>>>>>>>>>
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container-div')

    // PAGE CHILD DIV FOR LOCATION AND DESCRIPTION >>>>>>>>>>>>>>>>>>>>
    const childDiv1 = document.createElement('div');
    childDiv1.classList.add('child-div-1');

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.textContent = data.description;

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-div');
    locationDiv.textContent = `${data.city}, ${data.country}`;

    childDiv1.append(descriptionDiv, locationDiv);

    // PAGE WEATHER INFO DIV FOR WEATHER DATA >>>>>>>>>>>>>>>>>>>>
    const weatherInfoDiv = document.createElement('div');
    weatherInfoDiv.classList.add('weather-info-div');

    const tempDiv = document.createElement('div');
    tempDiv.classList.add('temp-div');
    tempDiv.textContent = data.temperature;

    // PAGE WEATHER INFO CHILD DIV FOR WEATHER DATA >>>>>>>>>>>>>>>>>>>>
    const childDiv2 = document.createElement('div');
    childDiv2.classList.add('child-div-2');

    const feelLike = document.createElement('div');
    feelLike.classList.add('feel-like');
    feelLike.textContent = data.feels_like;

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    humidity.textContent = data.humidity;

    const windSpeed = document.createElement('div');
    windSpeed.classList.add('wind-speed');
    windSpeed.textContent = data.wind;

    childDiv2.append(feelLike, humidity, windSpeed)

    weatherInfoDiv.append(tempDiv, childDiv2)


    document.body.append(header, childDiv1, weatherInfoDiv);
}

createUi()



export { weatherInfo }