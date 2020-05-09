const Results = Backbone.View.extend({
  el: '#results',

  template: _.template(
    '<h1>Results</h1>'
  ),

  events: {
    'submit': 'save_weather'
  },

  initialize: function() {
    this.listenTo(weather, 'change:success', this.render);
  },

  render: function() {
    console.log(this.model);
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  save_weather: function(e) {
    e.preventDefault();
    console.log('Saving weather');
  }
});
