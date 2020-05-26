const CityWeather = Backbone.View.extend({
  el: '#city_weather',

  template: _.template(
    '<% weather.forEach(function(item) { %>' +
      '<div class="col-xs-3">' +
        '<div class="panel panel-primary">' +
          '<div class="panel-heading">' +
            '<img src="http://openweathermap.org/img/wn/<%=item.icon%>@2x.png">' +
            '<h3 class="panel-title"><%=item.description%></h3>' +
          '</div>' +
          '<div class="panel-body">' +
            '<p>timestamp: <%=item.timestamp%></p>' +
            '<p>temperature: <%=item.temperature%></p>' +
            '<p>humidity: <%=item.humidity%></p>' +
            '<p>wind: <%=item.wind%></p>' +
            '<p>clouds: <%=item.clouds%></p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '<% }); %>'
  ),

  initialize: function(){
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
