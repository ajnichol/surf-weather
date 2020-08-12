const SurfItemForecast = Backbone.View.extend({
  el: '#surf_item_forecast',

  template: _.template(
    '<div class="container">' +
      '<div class="row">' +
        '<div class="col-xs-6">' +
          '<h1> <%= spot_name %> </h1>' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h1><%= surf_item_forecast.localTimestamp %></h1>' +
        '</div>' +
      '</div>' +
      '<div class="row">' +
        '<div class="col-xs-6">' +
          '<h3>Swell: <%= surf_item_forecast.swell.minBreakingHeight %>-<%= surf_item_forecast.swell.maxBreakingHeight %>ft, Rating: <%= surf_item_forecast.solidRating %>/5</h3>' +
          '<h4>Primary: <%= surf_item_forecast.swell.components.primary.height %>, Direction: <%= surf_item_forecast.swell.components.primary.compassDirection %></h4>' +
          '<h4>Secondary: <%= surf_item_forecast.swell.components.secondary.height %>, Direction: <%= surf_item_forecast.swell.components.secondary.compassDirection %></h4>' +
          '<h4>Tertiary: <%= surf_item_forecast.swell.components.tertiary.height %>, Direction: <%= surf_item_forecast.swell.components.tertiary.compassDirection %></h4>' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h3>Weather Conditions:</h3>' +
          '<h4>Air Temperature: <%= surf_item_forecast.condition.temperature %>f</h4>' +
          '<h4>Wind Speed: <%= surf_item_forecast.wind.speed %>mph, Direction: <%= surf_item_forecast.wind.compassDirection %></h4>' +
        '</div>' +
      '</div>' +
      '<div class="row">' +
        '<div class="col-xs-6">' +
          '<h3>Swell Chart</h3>' +
          '<img src="<%= surf_item_forecast.charts.swell %>" class="surf_charts">' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h3>Wind Chart</h3>' +
          '<img src="<%= surf_item_forecast.charts.wind %>" class="surf_charts">' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h3>Period Chart</h3>' +
          '<img src="<%= surf_item_forecast.charts.period %>" class="surf_charts">' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h3>Pressure Chart</h3>' +
          '<img src="<%= surf_item_forecast.charts.pressure %>" class="surf_charts">' +
        '</div>' +
      '</div>' +
    '</div>'
  ),

  // surf_item: function(event) {
  //   console.log(event.target.dataset.surfItem);
  //   surf.save({spot_id: event.target.dataset.spotId}, {
  //     wait: true,
  //     success: function(model, response) {
  //       console.log('response', response);
  //       // window.location.href = "http://localhost:8888/myprojects/surf-weather/src/#/surf_forecast";
  //     },
  //     error: function(model, error) {
  //       console.log('error', error);
  //       // self.$el.html(self.error_template(error));
  //     }
  //   });
  // },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
