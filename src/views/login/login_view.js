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
        '<input type="text" class="form-control" name="login_email" id="login_email" placeholder="Email">' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="sign_up_password" class="col-sm-2 control-label">Password</label>' +
      '<div class="col-sm-10">' +
        '<input type="password" class="form-control" name="login_password" id="login_password" placeholder="Password">' +
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
    user.set('confirm_password', '');
    let user_email = $('#login_email').val().trim();
    let user_password = $('#login_password').val().trim();
    user.save({email: user_email, password: user_password}, {
      wait: true,
      success: function(model, response) {
        JSON.stringify(response);
        model.set({user_id: response.user_id, name: response.name, password: '', error: '', isLoggedIn: true});
        window.location.href = "http://localhost:8888/myprojects/surf-weather/src/#/search";
      },
      error: function(model, error) {
        model.set('success', '');
        model.set('error', error.responseText);
      }
    });
  }
});
