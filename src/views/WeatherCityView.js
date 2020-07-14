import Handlebars from 'handlebars';

const WeatherCityView = function ({weatherCityTemplate, forecastWeatherCityTemplate, container}){
    var _weatherCityTemplate = weatherCityTemplate;
    var _forecastWeatherCityTemplate = forecastWeatherCityTemplate;
    var _container = container;
    var _handlebars = Handlebars;

    var _infoWeatherCityFormat = function (responseJSONAPI) {
        return {
            cityName : responseJSONAPI.name,
            temperature : (responseJSONAPI.main.temp - 273.15).toFixed(2) + " ºC",
            humidity : responseJSONAPI.main.humidity + "%",
            description : responseJSONAPI.weather[0].description,
            imgIcon : responseJSONAPI.weather[0].icon
        }
    };

    var _infoPreviousFiveDaysWeatherCityFormat = function (responseJSONAPI) {
        var result = [];
        responseJSONAPI.list.forEach( function(forecastByHour) {
            var foundPreviousByDay = result.find( weatherForecastByDay => weatherForecastByDay.forecastByDay === forecastByHour.dt_txt.substring(0,10) );
            if ( foundPreviousByDay === undefined ) {
                result.push({ 
                    forecastByDay : forecastByHour.dt_txt.substring(0,10),
                    forecastByHour : [
                        {
                            temperature: (forecastByHour.main.temp - 273.15).toFixed(2) + " ºC",
                            humidity : forecastByHour.main.humidity + "%",
                            description : forecastByHour.weather[0].description,
                            imgIcon : forecastByHour.weather[0].icon,
                            timeStamp : forecastByHour.dt_txt.substring(11,16)
                        }
                    ]  
                });
            } else {
                foundPreviousByDay.forecastByHour.push(                        
                    {
                        temperature: (forecastByHour.main.temp - 273.15).toFixed(2) + " ºC",
                        humidity : forecastByHour.main.humidity + "%",
                        description : forecastByHour.weather[0].description,
                        imgIcon : forecastByHour.weather[0].icon,
                        timeStamp : forecastByHour.dt_txt.substring(11,16)
                    }
                );
            }
        })

        return {
            'datos' : result
        };
    };

    var showWeatherCity = function (responseJSONAPI) {
        const infoWeatherCity = _infoWeatherCityFormat(responseJSONAPI);
        const renderWeatherCityTemplate = _handlebars.compile(_weatherCityTemplate);
        _container.innerHTML = renderWeatherCityTemplate(infoWeatherCity);
    };

    var showForecastWeatherByCity = function (responseJSONAPI) {
        const infoForecastWeatherCity = _infoPreviousFiveDaysWeatherCityFormat(responseJSONAPI);
        const renderForecastWeatherCityTemplate = _handlebars.compile(_forecastWeatherCityTemplate);
        _container.innerHTML = renderForecastWeatherCityTemplate( infoForecastWeatherCity );
    };

    return{
        showWeatherCity : showWeatherCity,
        _infoPreviousFiveDaysWeatherCityFormat : _infoPreviousFiveDaysWeatherCityFormat,
        showForecastWeatherByCity : showForecastWeatherByCity
    };
};

export default WeatherCityView