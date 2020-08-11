const SurfItemForecast = Backbone.View.extend({
  el: '#surf_item_forecast',

  template: _.template(
    '<div class="container">' +
      '<div class="row">' +
        '<div class="col-xs-12">' +
          '<h1> <%= spot_name %> </h1>' +
          '<h2> Detailed surf forecast for:  <%= surf_item_forecast.localTimestamp %></h2>' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h2>Swell: <%= surf_item_forecast.swell.minBreakingHeight %>-<%= surf_item_forecast.swell.maxBreakingHeight %>ft, Rating: <%= surf_item_forecast.solidRating %>/5</h2>' +
          '<h3>Primary: <%= surf_item_forecast.swell.components.primary.height %>, Direction: <%= surf_item_forecast.swell.components.primary.compassDirection %></h3>' +
          '<h3>Secondary: <%= surf_item_forecast.swell.components.secondary.height %>, Direction: <%= surf_item_forecast.swell.components.secondary.compassDirection %></h3>' +
          '<h3>Tertiary: <%= surf_item_forecast.swell.components.tertiary.height %>, Direction: <%= surf_item_forecast.swell.components.tertiary.compassDirection %></h3>' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h2>Weather Conditions</h2>' +
          '<h3>Air Temperature: <%= surf_item_forecast.condition.temperature %>f</h3>' +
          '<h3>Wind Speed: <%= surf_item_forecast.wind.speed %>mph, Direction: <%= surf_item_forecast.wind.compassDirection %></h3>' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h2>Swell Chart</h2>' +
          '<img src="<%= surf_item_forecast.charts.swell %>" class="surf_charts">' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h2>Wind Chart</h2>' +
          '<img src="<%= surf_item_forecast.charts.wind %>" class="surf_charts">' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h2>Period Chart</h2>' +
          '<img src="<%= surf_item_forecast.charts.period %>" class="surf_charts">' +
        '</div>' +
        '<div class="col-xs-6">' +
          '<h2>Pressure Chart</h2>' +
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
