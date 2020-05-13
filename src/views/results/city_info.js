const CityInfo = Backbone.View.extend({
  el: '#results',

  template: _.template(
    '<div class="jumbotron text-center">' +
      '<h1 class="display-4"><%=city.name%></h1>' +
      '<h4>Country: <%=city.country%></h4>' +
      '<h4>Population: <%=city.population%></h4>' +
      '<h4>Sunrise: <%=city.sunrise%></h4>' +
      '<h4>Sunset: <%=city.sunset%></h4>' +
      '<button type="submit" class="btn btn-success">Save <span class="glyphicon glyphicon-save" aria-hidden="true"></span></button>' +
    '</div>' +
    '<div class="container">' +
      '<div class="row" id="city_weather">' +
      '</div>' +
    '</div>'
  ),

  events: {
    'submit': 'save_weather'
  },

  initialize: function() {
    this.listenTo(weather, 'change:success', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    const city_weather = new CityWeather({
      model: this.model
    });
    return this;
  },

  save_weather: function(e) {
    e.preventDefault();
    console.log('Saving weather');
  }
});
