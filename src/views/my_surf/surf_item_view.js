const SurfItemForecast = Backbone.View.extend({
  el: '#surf_item_forecast',

  template: _.template(
    '<div class="container">' +
      '<div class="row">' +
        '<div class="col-xs-3">' +
          '<p>swell: <%= surf_item_forecast.swell.midBreakHeight %> - <%= surf_item_forecast.swell.maxBreakHeight %>ft</p>' +
        '</div>' +
        '<div class="col-xs-3">' +
          '<p>timestamp: <%= surf_item_forecast.localTimestamp %></p>' +
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
