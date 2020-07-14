
import request from '../utils/request';

const APIID = "74947133757425066e5219ddd1dd5ae6";
const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org";

const weatherUrl = city => `${BASE_URL}/data/2.5/weather?q=${city}&appid=${APIID}`;
const weatherByFiveDaysUrl = city => `${BASE_URL}/data/2.5/forecast?q=${city}&appid=${APIID}`;

const WeatherCityModel = {

    getWeatherByCity(city, callback) {
        request( weatherUrl(city), callback );
    },

    getWeatherByFiveDay(city, callback) {
        request( weatherByFiveDaysUrl(city), callback );
    }
  
};
  
export default WeatherCityModel