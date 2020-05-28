const MyWeather = Backbone.View.extend({
  el: '#my_weather',

  template: _.template(
    '<h1>this is my weather</h1>'
  ),

  render: function() {
    this.collection.fetch({
      success: function(collection, response) {
        console.log('success: ', response);
        this.$el.html(this.template(this.collection.toJSON()));
        return this;
      },
      error: function(collection, error) {
        console.log('error: ', error);
      }
    });
    // this.$el.html(this.template(this.collection.toJSON()));
    // return this;
  }
});
