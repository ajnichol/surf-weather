const MySurf = Backbone.View.extend({
  el: '#my_surf',

  template: _.template(
    '<h1>Hello from my surf</h1>'
  ),

  // events: {
  //   'click #delete_weather': 'delete_weather',
  //   'click #view_weather': 'view_weather'
  // },

  // initialize: function() {
  //   this.listenTo(collect_weather, 'destroy', this.render);
  // },

  // view_surf: function(event) {
  //   weather.save({city: event.target.dataset.city}, {
  //     wait: true,
  //     success: function(model, response) {
  //       model.set('error', '');
  //       model.set('success', '');
  //       window.location.href = "http://localhost:8888/myprojects/surf-weather/src/#/results";
  //     },
  //     error: function(model, error) {
  //       model.set('error', error.responseText);
  //     }
  //   });
  // },

  render: function(error) {
    this.$el.html(this.template());
  }
});
