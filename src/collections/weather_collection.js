const CollectWeather = Backbone.Collection.extend({
  model: Weather,

  url: 'php/weather/save_weather.php?user_id=' + localStorage.getItem('user_id')
});

const collect_weather = new CollectWeather();
