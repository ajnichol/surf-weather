const Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'sign_up': 'signUp',
    'login': 'login',
    'search': 'search',
    'my_weather': 'myWeather'
  },

  initialize: function(){
    this.home = new Home();
    this.signUp = new SignUp();
    this.login = new Login();
    this.search = new Search();
    this.myWeather = new MyWeather();
  },

  home: function() {
    $('#content').removeClass('container');
    $('#content').html(ViewManager.showView(this.home));
  },

  signUp: function() {
    $('#content').addClass('container');
    $('#content').html(ViewManager.showView(this.signUp));
  },

  login: function() {
    $('#content').addClass('container');
    $('#content').html(ViewManager.showView(this.login));
  },

  search: function() {
    $('#content').addClass('container');
    $('#content').html(ViewManager.showView(this.search));
  },

  myWeather: function() {
    $('#content').addClass('container');
    $('#content').html(ViewManager.showView(this.myWeather));
  }
});

const router = new Router();

$(function() {
  Backbone.history.start();
  $('.carousel').carousel({
    interval: 8000
  });
});
