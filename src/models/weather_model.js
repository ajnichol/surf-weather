const Weather = Backbone.Model.extend({
    urlRoot: 'php/weather/search_weather.php',

    idAttribute: 'id',

    defaults: {
        city: [],
        weather: [],
        success: '',
        error: ''
    }
});

const weather = new Weather();
