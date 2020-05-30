const MyWeather = Backbone.View.extend({
  el: '#my_weather',

  template: _.template(
    '<h1>this is my weather</h1>' +
    '<% models.forEach(function(item) { %>' +
      '<h1>City Name: <%= item.attributes.city.name %></h1>' +
    '<% }); %>'
  ),

  render: function() {
    const self = this;
    collect_weather.fetch({
      success: function(collection, response) {
        console.log('success: ', response);
        self.$el.html(self.template(collection));
        return self;
      },
      error: function(collection, error) {
        console.log('error: ', error);
        self.$el.html(self.template(collection));
        return self;
      }
    });
  }
});
