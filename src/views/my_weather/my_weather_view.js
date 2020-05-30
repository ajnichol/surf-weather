const MyWeather = Backbone.View.extend({
  el: '#my_weather',

  template: _.template(
    '<div class="container text-center">' +
      '<% models.forEach(function(item) { %>' +
        '<div class="row">' +
          '<div class="col-xs-12">' +
            '<h1>City Name: <%= item.attributes.city %></h1>' +
          '</div>' +
        '</div>' +
      '<% }); %>' +
    '</div>'
  ),

  error_template: _.template(
    '<div class="container text-center">' +
      '<div class="row">' +
        '<div class="col-xs-12">' +
          '<% if (responseText != "") { %>' +
            '<h3 class="error"><%= responseText %></h3>' +
          '<% } else { %>' +
            '<h3 class="error">Unknown error occured.</h3>' +
          '<% } %>' +
        '</div>' +
      '</div>' +
    '</div>'
  ),

  render: function() {
    const self = this;
    collect_weather.fetch({
      success: function(collection, response) {
        self.$el.html(self.template(collection));
        return self;
      },
      error: function(collection, error) {
        self.$el.html(self.error_template(error));
        return self;
      }
    });
  }
});
