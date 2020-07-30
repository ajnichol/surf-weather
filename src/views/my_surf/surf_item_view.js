const SurfItemForecast = Backbone.View.extend({
  el: '#surf_item_forecast',

  template: _.template(
    '<div class="jumbotron text-center">' +
      '<h1 class="display-4"><%= spot_name %></h1>' +
      '<h2>Surf Forecast</h2>' +
    '</div>' +
    '<div class="container">' +
      '<div class="row">' +
      '<% surf_forecast.forEach(function(item) { %>' +
        '<div class="col-xs-3">' +
          '<div class="panel panel-primary">' +
            '<div class="panel-heading">' +
              '<img src="http://cdnimages.magicseaweed.com/30x30/<%= item.condition.weather %>.png">' +
              '<h3 class="panel-title"> Air Temp: <%= item.condition.temperature %></h3>' +
            '</div>' +
            '<div class="panel-body">' +
              '<p>timestamp: <%= item.localTimestamp %></p>' +
              '<p>swell: <%= item.swell.minBreakingHeight %> - <%= item.swell.maxBreakingHeight %></p>' +
              '<p>wind: <%= item.wind.speed %>MPH, direction: <%= item.wind.compassDirection %></p>' +
              '<a target="_blank" href="#" id="surf_item" data-surf-item="<%= item %>">click for full forecast details</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '<% }); %>' +
      '</div>' +
    '</div>'
  ),

  initialize: function() {
    this.render();
  },

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
