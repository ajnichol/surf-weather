const CityInfo = Backbone.View.extend({
  el: '#results',

  template: _.template(
    '<div class="jumbotron text-center">' +
      '<h1 class="display-4"><%=city.name%></h1>' +
      '<h4>Country: <%=city.country%></h4>' +
      '<h4>Population: <%=city.population%></h4>' +
      '<h4>Sunrise: <%=city.sunrise%></h4>' +
      '<h4>Sunset: <%=city.sunset%></h4>' +
      '<button type="button" class="btn btn-success">Save <span class="glyphicon glyphicon-save" aria-hidden="true"></span></button>' +
      '<% if (error != "") {%>' +
        '<p class="error"><%=error%></p>' +
      '<% } else if (success != "") {%>' +
        '<p class="success"><%=success%></p>' +
      '<% } %>' +
    '</div>' +
    '<div class="container">' +
      '<div class="row" id="city_weather">' +
      '</div>' +
    '</div>'
  ),

  events: {
    'click': 'save_weather'
  },

  initialize: function() {
    this.listenTo(weather, 'change:success', this.render);
    this.listenTo(weather, 'change:error', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    const city_weather = new CityWeather({
      model: this.model
    });
    return this;
  },

  save_weather: function() {
    console.log('Saving weather');
    console.log(weather);
    console.log(weather.attributes);
    let my_weather = collect_weather.create(
      weather.attributes,
      {
        wait: true,
        success: function(model, response) {
          console.log(response);
          // this.model.set('success', response.success);
        },
        error: function(error) {
          console.log(error);
          // this.model.set('error', error);
        }
      }
    );
  }
});
