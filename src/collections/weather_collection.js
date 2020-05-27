const CollectWeather = Backbone.Collection.extend({
  model: Weather,

  url: 'php/weather/save_weather.php'
});

const collect_weather = new CollectWeather();
