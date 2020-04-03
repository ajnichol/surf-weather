const Router = Backbone.Router.extend({
  routes: {
    '': 'homeScreen',
    'sign_up': 'signUp',
    'login': 'login',
    'search': 'search',
    'my_weather': 'myWeather'
  },

  homeScreen: function() {
    console.log('this is home screen');
  },

  signUp: function() {
    console.log('this is sign up');
  },

  login: function() {
    console.log('this is login');
  },

  search: function() {
    console.log('this is search');
  },

  myWeather: function() {
    console.log('this is my weather');
  }
});

const router = new Router();

$(function() {
  Backbone.history.start();
});
