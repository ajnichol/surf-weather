const CollectWeather = Backbone.Collection.extend({
  // model: SavedWeather,

  url: 'php/weather/collect_weather.php'
});

const collect_weather = new CollectWeather();
