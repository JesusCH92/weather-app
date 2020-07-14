import WeatherCityModel from './models/WeatherCityModel';
import WeatherCityController from './controllers/WeatherCityController';
import WeatherCityView from './views/WeatherCityView';

const cityList = document.querySelector(".list-group");

const containerCardTitle = document.querySelector('#container-card-title');
const containerCard = document.querySelector('.city-container');

const submitBtn = document.querySelector('input[type="submit"]');
const inputQuery = document.querySelector('input[name="query"]');
const initBtn =  document.querySelector('#weather-city-app');

const weatherCityTemplate = document.getElementById('weather-city-template').innerHTML;
const forecastWeatherCityTemplate = document.getElementById('forecast-weather-city-template').innerHTML;
const weatherCityViews = new WeatherCityView({
    weatherCityTemplate : weatherCityTemplate, 
    forecastWeatherCityTemplate : forecastWeatherCityTemplate, 
    container : containerCard
});


const weatherCityController = new WeatherCityController({
    cities : cityList,
    containerCardTitle : containerCardTitle,
    containerCard : containerCard,
    inputQuery : inputQuery,
    submitBtn : submitBtn,
    initBtn : initBtn,
    weatherCityTemplate : weatherCityTemplate,
    weatherCityViews,
    WeatherCityModel
});
  
weatherCityController.initEvents();