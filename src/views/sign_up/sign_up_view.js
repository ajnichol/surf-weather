const SignUp = Backbone.View.extend({
  tagName: 'div',

  className: 'login_signup',

  template: _.template(
    '<div class="container">' +
      '<form class="form-horizontal forms">' +
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
            '<input type="text" class="form-control" id="sign_up_name" placeholder="Name">' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="sign_up_email" class="col-sm-2 control-label">Email</label>' +
          '<div class="col-sm-10">' +
            '<input type="email" class="form-control" id="sign_up_email" placeholder="Email">' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="sign_up_password" class="col-sm-2 control-label">Password</label>' +
          '<div class="col-sm-10">' +
            '<input type="text" class="form-control" id="sign_up_password" placeholder="Password">' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="sign_up_confirm" class="col-sm-2 control-label">Confirm Password</label>' +
          '<div class="col-sm-10">' +
            '<input type="text" class="form-control" id="sign_up_confirm" placeholder="Confirm Password">' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<div class="col-sm-offset-2 col-sm-10">' +
            '<button type="submit" class="btn btn-default">Submit</button>' +
          '</div>' +
        '</div>' +
      '</form>' +
    '</div>'
  ),

  render: function() {
    this.remove();
    this.$el.html(this.template());
    return this;
  }
});
