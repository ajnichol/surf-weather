const Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'sign_up': 'signUp',
    'login': 'login',
    'search': 'search',
    'my_weather': 'myWeather'
  },

  preinitialize: function() {
    console.log('this is cool');
  },

  initialize: function() {
    this.home = new Home();
    this.signUp = new SignUp({
      model: user
    });
    this.login = new Login();
    this.search = new Search();
    this.myWeather = new MyWeather();
  },

  home: function() {
    $('#sign_up').hide();
    $('#login').hide();
    $('#home').show();
    this.home.render().el;
    $('.carousel').carousel({
      interval: 7000
    });
  },

  signUp: function() {
    $('#home').hide();
    $('#login').hide();
    $('#sign_up').show();
    this.signUp.render().el;
  },

  login: function() {
    $('#home').hide();
    $('#sign_up').hide();
    $('#login').show();
    this.login.render().el;
  },

  search: function() {
    $('#content').html(ViewManager.showView(this.search));
  },

  myWeather: function() {
    $('#content').html(ViewManager.showView(this.myWeather));
  }
});

const router = new Router();

$(function() {
  Backbone.history.start();
});
