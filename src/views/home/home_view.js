const Home = Backbone.View.extend({
  tagName: 'div',

  id: 'home',

  template: _.template(
    '<h1>this is home screen</h1>'
  ),

  render: function() {
    this.remove();
    this.$el.html(this.template());
    return this;
  }
});
