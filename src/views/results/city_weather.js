const CityWeather = Backbone.View.extend({
  el: '#city_weather',

  template: _.template(
    // '<% for (var i = 0; weather.length; i++) {%>' +
      '<div class="col-xs-3">' +
        '<div class="panel panel-default">' +
          '<div class="panel-heading">' +
            '<h3 class="panel-title"><%=weather[0].description%></h3>' +
          '</div>' +
          '<div class="panel-body">' +
            '<p>timestamp: <%=weather[0].timestamp%></p>' +
            '<p>temperature: <%=weather[0].temperature%></p>' +
            '<p>humidity: <%=weather[0].humidity%></p>' +
            '<p>wind: <%=weather[0].wind%></p>' +
            '<p>clouds: <%=weather[0].clouds%></p>' +
          '</div>' +
        '</div>' +
      '</div>'
    // '<% } %>'
  ),

  initialize: function(){
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
