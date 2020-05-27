const Weather = Backbone.Model.extend({
    idAttribute: 'id',

    defaults: {
        user_id: localStorage.getItem('user_id'),
        city: [],
        weather: [],
        success: '',
        error: ''
    }
});

const weather = new Weather();

weather.url = 'php/weather/search_weather.php';
