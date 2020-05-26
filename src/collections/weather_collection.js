const CollectWeather = Backbone.Collection.extend({
  model: Weather,

  url: 'php/weather/collect_weather.php'
});

const collect_weather = new CollectWeather();
