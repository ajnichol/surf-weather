const Weather = Backbone.Model.extend({
    urlRoot: 'php/weather/search_weather.php',

    idAttribute: 'id',

    defaults: {
        user_id: '',
        city: [],
        weather: [],
        success: '',
        error: ''
    }
});

const weather = new Weather();
