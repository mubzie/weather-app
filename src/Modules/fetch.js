const fetchWeatherData = async (city) => {
    try {

        // openweathermap api that returns the accurate weather information
        const geoLocation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=71380f889ac5311673f3b27c8c5ce60f`, { mode: "cors"});
        const getGeolocation = await geoLocation.json();

        const latitude = getGeolocation[0].lat;
        const longitude = getGeolocation[0].lon;

        // openweathermap api that returns the data for goe location
        const weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=71380f889ac5311673f3b27c8c5ce60f&units=imperial`, {mode: "cors"});
        const response = await weatherApi.json();

        console.log(response); 

        return {
         response
        }

    } catch (error) {
        console.log(error);
    }
    
}

export { fetchWeatherData };

