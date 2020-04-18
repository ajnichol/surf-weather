const Login = Backbone.View.extend({
  el: '#login_form',

  template: _.template(
    '<div class="form-group">' +
      '<div class="col-sm-2">' +
      '</div>' +
      '<div class="col-sm-10">' +
        '<h3>Login</h3>' +
        '<% if (error != "") {%>' +
          '<p class="error"><%=error%></p>' +
        '<% } %>' +
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

  initialize: function() {
    this.listenTo(user, 'change:error', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  login: function(event) {
    event.preventDefault();
    let user_email = $('#login_email').val().trim();
    let login_password = $('#login_password').val().trim();
    user.set({
      name: '',
      email: user_email,
      password: login_password,
      confirm_password: '',
      error: '',
      success: '',
      isLoggedIn: '',
    });
    user.fetch({
      success: function(model, response) {
        console.log(response);
      },
      error: function(model, error) {
        console.log(error);
      }
    });
  }
});
