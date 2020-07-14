import previousFiveDays from '../../response-previous-5-days.json';

class WeatherCityController {
    constructor({cities, containerCardTitle, containerCard, inputQuery, submitBtn, initBtn, weatherCityViews, WeatherCityModel}){
        this._cities = cities;
        this._containerTitle = containerCardTitle;
        this._container = containerCard;
        this._inputQuery = inputQuery;
        this._submitBtn = submitBtn;
        this._initBtn = initBtn;
        this._weatherCityViews = weatherCityViews;
        this._weatherCityModel = WeatherCityModel;
    }

    initEvents(){
        this._cities.addEventListener('click', (event) => {
            let citySelected = event.target.getAttribute('city');
            this._containerTitle.innerHTML = "City: " + citySelected;
            this._weatherCityModel.getWeatherByCity( citySelected, this._weatherCityViews.showWeatherCity );
        });

        this._container.addEventListener('click', (event) => {
            let citySelected = event.target;
            if ( !citySelected.className.includes('city-name') ) {
                return;
            }
            let forecastByCity = citySelected.text;
            this._containerTitle.innerHTML = "Forecast weather for: " + forecastByCity;
            this._weatherCityModel.getWeatherByFiveDay( forecastByCity, this._weatherCityViews.showForecastWeatherByCity );

        });

        this._submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            let citySearch = this._inputQuery.value;

            if (citySearch === "") {
                return;
            }

            this._containerTitle.innerHTML = "Forecast weather for: " + citySearch;
            this._weatherCityModel.getWeatherByFiveDay( citySearch, this._weatherCityViews.showForecastWeatherByCity );
        });

        this._initBtn.addEventListener('click', (event) => {
            this._containerTitle.innerHTML = "";
            this._container.innerHTML = "";
            this._inputQuery.value = "";
        });
    }    

}

export default WeatherCityController;