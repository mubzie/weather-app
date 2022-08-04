const fetchLocationGeo = async (city) => {
    try {

        const response = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=71380f889ac5311673f3b27c8c5ce60f`, { mode: "cors"});
        const data = await response.json()
        console.log(data)

        const lat = data[0].lat
        const lon = data[0].lon

        fetchWeatherData(lat, lon)

        console.log(lat)
        console.log(lon)

    } catch (err) {
      console.log(err)
    }
}

const fetchWeatherData = async (lat, lon) => {
    try {

        // openweathermap api that returns the data for goe location
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=71380f889ac5311673f3b27c8c5ce60f&units=imperial`, {mode: "cors"});
        const data = await response.json();
        console.log(data); 

        getWeatherInfo(data)

        return data;

    } catch (error) {
        console.log(error);
    }
    
}

const getWeatherInfo = (data) => {

    const getCity = () => data.name;
    const getCountry = () => data.sys.country;

    console.log(getCity())
    console.log(getCountry())

    return {
        getCity,
        getCountry
    }
}

export { fetchLocationGeo, fetchWeatherData, getWeatherInfo };