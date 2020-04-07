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
    $('#content').html(ViewManager.showView(this.home));
    $('.carousel').carousel({
      interval: 7000
    });
  },

  signUp: function() {
    $('#content').html(ViewManager.showView(this.signUp));
  },

  login: function() {
    $('#content').html(ViewManager.showView(this.login));
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
