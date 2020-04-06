const SignUp = Backbone.View.extend({
  tagName: 'div',

  id: 'signUp',

  template: _.template(
    '<h1>this is sign up</h1>'
  ),

  render: function() {
    this.remove();
    this.$el.html(this.template());
    return this;
  }
});
