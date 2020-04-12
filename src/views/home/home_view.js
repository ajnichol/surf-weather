const Home = Backbone.View.extend({
  el: '#home',

  template: _.template(
    '<div id="carousel-generic" class="carousel slide" data-ride="carousel">' +
      '<ol class="carousel-indicators">' +
        '<li data-target="#carousel-generic" data-slide-to="0" class="active"></li>' +
        '<li data-target="#carousel-generic" data-slide-to="1"></li>' +
        '<li data-target="#carousel-generic" data-slide-to="2"></li>' +
      '</ol>' +
      '<div class="carousel-inner" role="listbox">' +
        '<div class="item active">' +
          '<img src="img/home/home_weather.jpg" alt="rolling hills with snow">' +
          '<div class="carousel-caption">' +
            '<h1>Weather</h1>' +
            '<h3>Search any city\'s 5 day forecasted weather</h3>' +
          '</div>' +
        '</div>' +
        '<div class="item">' +
          '<img src="img/home/home_surf.jpg" alt="surfers surfing at sunset">' +
          '<div class="carousel-caption">' +
          '<h1>Surf</h1>' +
          '<h3>Check 15 day surf forecast for select cities</h3>' +
          '</div>' +
        '</div>' +
        '<div class="item">' +
          '<img src="img/home/home_personalize.jpg" alt="...">' +
          '<div class="carousel-caption">' +
          '<h1>Personalize</h1>' +
          '<h3>Save your favorite searches for easy to access weather info</h3>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<a class="left carousel-control" href="#carousel-generic" role="button" data-slide="prev">' +
        '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
        '<span class="sr-only">Previous</span>' +
      '</a>' +
      '<a class="right carousel-control" href="#carousel-generic" role="button" data-slide="next">' +
        '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
        '<span class="sr-only">Next</span>' +
      '</a>' +
    '</div>'
  ),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
