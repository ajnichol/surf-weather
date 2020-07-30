const Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'sign_up': 'signUp',
    'login': 'login',
    'search': 'search',
    'results': 'results',
    'my_weather': 'myWeather',
    'my_surf': 'mySurf',
    'surf_results': 'surfResults',
    'surf_item_forecast': 'surfItemForecast'
  },

  initialize: function() {
    this.home = new Home();
    this.signUp = new SignUp({
      model: user
    });
    this.login = new Login({
      model: user
    });
    this.search = new Search({
      model: weather
    });
    this.city_info = new CityInfo({
      model: weather
    });
    this.my_weather = new MyWeather({
      collection: collect_weather
    });
    this.my_surf = new MySurf({
      collection: collect_surf
    });
    this.surf_results = new SurfResults({
      model: surf
    });
    this.surf_item_forecast = new SurfItemForecast({
      model: surf_item
    })
  },

  home: function() {
    $('#sign_up').hide();
    $('#login').hide();
    $('#search').hide();
    $('#results').hide();
    $('#my_weather').hide();
    $('#my_surf').hide();
    $('#surf_results').hide();
    $('#surf_item_forecast').hide();
    $('#home').show();
    this.home.render();
    $('.carousel').carousel({
      interval: 7000
    });
  },

  signUp: function() {
    $('#home').hide();
    $('#login').hide();
    $('#search').hide();
    $('#results').hide();
    $('#my_weather').hide();
    $('#my_surf').hide();
    $('#surf_results').hide();
    $('#surf_item_forecast').hide();
    $('#sign_up').show();
    this.signUp.render();
  },

  login: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#search').hide();
    $('#results').hide();
    $('#my_weather').hide();
    $('#my_surf').hide();
    $('#surf_results').hide();
    $('#surf_item_forecast').hide();
    $('#login').show();
    this.login.render();
  },

  search: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#login').hide();
    $('#my_weather').hide();
    $('#results').hide();
    $('#my_surf').hide();
    $('#surf_results').hide();
    $('#surf_item_forecast').hide();
    $('#search').show();
    this.search.render();
  },

  results: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#login').hide();
    $('#search').hide();
    $('#my_weather').hide();
    $('#my_surf').hide();
    $('#surf_results').hide();
    $('#surf_item_forecast').hide();
    $('#results').show();
    this.city_info.render();
  },

  myWeather: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#login').hide();
    $('#search').hide();
    $('#results').hide();
    $('#my_surf').hide();
    $('#surf_results').hide();
    $('#surf_item_forecast').hide();
    $('#my_weather').show();
    this.my_weather.render();
  },

  mySurf: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#login').hide();
    $('#search').hide();
    $('#results').hide();
    $('#my_weather').hide();
    $('#surf_results').hide();
    $('#surf_item_forecast').hide();
    $('#my_surf').show();
    this.my_surf.render();
  },

  surfResults: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#login').hide();
    $('#search').hide();
    $('#results').hide();
    $('#my_weather').hide();
    $('#my_surf').hide();
    $('#surf_item_forecast').hide();
    $('#surf_results').show();
    this.surf_results.render();
  },

  surfItemForecast: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#login').hide();
    $('#search').hide();
    $('#results').hide();
    $('#my_weather').hide();
    $('#my_surf').hide();
    $('#surf_results').hide();
    $('#surf_item_forecast').show();
    this.surf_item_forecast.render();
  }
});

const router = new Router();

$(function() {
  Backbone.history.start();
});
