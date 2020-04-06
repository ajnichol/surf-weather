const Search = Backbone.View.extend({
  tagName: 'div',

  id: 'search',

  template: _.template(
    '<h1>this is search</h1>'
  ),

  render: function() {
    this.remove();
    this.$el.html(this.template());
    return this;
  }
});
