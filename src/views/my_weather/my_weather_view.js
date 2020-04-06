const MyWeather = Backbone.View.extend({
  tagName: 'div',

  id: 'myWeather',

  template: _.template(
    '<h1>this is my weather</h1>'
  ),

  render: function() {
    this.remove();
    this.$el.html(this.template());
    return this;
  }
});
