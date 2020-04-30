const Weather = Backbone.Model.extend({
    urlRoot: 'php/weather/search_weather.php',

    idAttribute: 'weather_id',

    defaults: {
        weather_id: '',
        city: '',
        country: '',
        population: '',
        timezone: '',
        sunrise: '',
        sunset: '',
        temperature: '',
        humidity: '',
        description: '',
        wind: '',
        timestamp: '',
        error: ''
    }
});

const weather = new Weather();
