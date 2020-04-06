const Login = Backbone.View.extend({
  tagName: 'div',

  id: 'login',

  template: _.template(
    '<h1>this is login</h1>'
  ),

  render: function() {
    this.remove();
    this.$el.html(this.template());
    return this;
  }
});
