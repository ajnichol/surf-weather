const Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'sign_up': 'signUp',
    'login': 'login',
    'search': 'search',
    'results': 'results',
    'my_weather': 'myWeather'
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
    this.results = new Results({
      model: weather
    });
    this.myWeather = new MyWeather();
  },

  home: function() {
    $('#sign_up').hide();
    $('#login').hide();
    $('#search').hide();
    $('#home').show();
    this.home.render().el;
    $('.carousel').carousel({
      interval: 7000
    });
  },

  signUp: function() {
    $('#home').hide();
    $('#login').hide();
    $('#search').hide();
    $('#sign_up').show();
    this.signUp.render().el;
  },

  login: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#search').hide();
    $('#login').show();
    this.login.render().el;
  },

  search: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#login').hide();
    $('#search').show();
    this.search.render().el;
  },

  results: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#login').hide();
    $('#search').hide();
    $('#results').show();
    this.results.render().el;
  },

  myWeather: function() {
    $('#content').html(ViewManager.showView(this.myWeather));
  }
});

const router = new Router();

$(function() {
  Backbone.history.start();
});
