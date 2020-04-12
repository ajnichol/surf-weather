const SignUp = Backbone.View.extend({
  el: '#sign_up_form',

  template: _.template(
    '<div class="form-group">' +
      '<div class="col-sm-2">' +
      '</div>' +
      '<div class="col-sm-10">' +
        '<h3>Sign Up</h3>' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="sign_up_name" class="col-sm-2 control-label">Name</label>' +
      '<div class="col-sm-10">' +
        '<input type="text" class="form-control" name="sign_up_name" id="sign_up_name" placeholder="Name">' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="sign_up_email" class="col-sm-2 control-label">Email</label>' +
      '<div class="col-sm-10">' +
        '<input type="email" class="form-control" name="sign_up_email" id="sign_up_email" placeholder="Email">' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="sign_up_password" class="col-sm-2 control-label">Password</label>' +
      '<div class="col-sm-10">' +
        '<input type="text" class="form-control" name="sign_up_password" id="sign_up_password" placeholder="Password">' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="sign_up_confirm" class="col-sm-2 control-label">Confirm Password</label>' +
      '<div class="col-sm-10">' +
        '<input type="text" class="form-control" name="sign_up_confirm" id="sign_up_confirm" placeholder="Confirm Password">' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<div class="col-sm-offset-2 col-sm-10">' +
        '<button type="submit" class="btn btn-default">Submit</button>' +
      '</div>' +
    '</div>'
  ),

  events: {
    'submit': 'sign_up'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  sign_up: function(event) {
    event.preventDefault();
    let user_name = $('#sign_up_name').val().trim();
    let user_email = $('#sign_up_email').val().trim();
    let user_password = $('#sign_up_password').val().trim();
    let user_confirm = $('#sign_up_confirm').val().trim();
    console.log(user_name);
    console.log(user_email);
    console.log(user_password);
    console.log(user_confirm);
  }
});
