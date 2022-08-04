import { fetchLocationGeo } from "./fetchData";
import { fetchWeatherData } from "./fetchData";
import { getWeatherInfo } from "./fetchData";

let city = "London";

const condition = async () => {

    const {lat, lon} = await fetchLocationGeo(city)
    console.log(lat, lon)

    const condition = await fetchWeatherData(lat, lon)
    console.log(condition)

    const getCondition = getWeatherInfo(condition)

    console.log(getCondition)

    return getCondition;
}

condition()

export { condition }