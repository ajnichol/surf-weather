const Login = Backbone.View.extend({
  el: '#login_form',

  template: _.template(
    '<div class="form-group">' +
      '<div class="col-sm-2">' +
      '</div>' +
      '<div class="col-sm-10">' +
        '<h3>Login</h3>' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="login_email" class="col-sm-2 control-label">Email</label>' +
      '<div class="col-sm-10">' +
        '<input type="email" class="form-control" name="login_email" id="login_email" placeholder="Email">' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="sign_up_password" class="col-sm-2 control-label">Password</label>' +
      '<div class="col-sm-10">' +
        '<input type="text" class="form-control" name="login_password" id="login_password" placeholder="Password">' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<div class="col-sm-offset-2 col-sm-10">' +
        '<button type="submit" class="btn btn-default">Submit</button>' +
      '</div>' +
    '</div>'
  ),

  events: {
    'submit': 'login'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  login: function(event) {
    event.preventDefault();
    console.log('logging in');
  }
});
