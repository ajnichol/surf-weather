const MySurf = Backbone.View.extend({
  el: '#my_surf',

  template: _.template(
    '<div id="delmar" data-spot-id="<%= models[0].attributes.spot_id %>">' +
      '<h1 class="surf_spots"><%= models[0].attributes.spot_name %></h1>' +
      '<p class="spot_desc">Click to view forecast</p>' +
    '</div>' +
    '<div id="tourmaline" data-spot-id="<%= models[1].attributes.spot_id %>">' +
      '<h1 class="surf_spots"><%= models[1].attributes.spot_name %></h1>' +
      '<p class="spot_desc">Click to view forecast</p>' +
    '</div>'
  ),

  error_template: _.template(
    '<div class="container text-center">' +
      '<div class="row">' +
        '<div class="col-xs-12">' +
          '<% if (responseText != "") { %>' +
            '<h3 class="error"><%= responseText %></h3>' +
          '<% } else { %>' +
            '<h3 class="error">Unknown error occured.</h3>' +
          '<% } %>' +
        '</div>' +
      '</div>' +
    '</div>'
  ),

  events: {
    'click #tourmaline': 'search_surf',
    'click #delmar': 'search_surf'
  },

  // initialize: function() {
  //   this.listenTo(collect_weather, 'destroy', this.render);
  // },

  search_surf: function(event) {
    console.log(event);
    // weather.save({city: event.target.dataset.spotId}, {
    //   wait: true,
    //   success: function(model, response) {
    //     model.set('error', '');
    //     model.set('success', '');
    //     window.location.href = "http://localhost:8888/myprojects/surf-weather/src/#/results";
    //   },
    //   error: function(model, error) {
    //     model.set('error', error.responseText);
    //   }
    // });
  },

  render: function(error) {
    const self = this;
    collect_surf.fetch({
      success: function(collection, response) {
        console.log('response', response);
        console.log(collection);
        self.$el.html(self.template(collection));
        // return self;
      },
      error: function(collection, error) {
        console.log('error', error);
        self.$el.html(self.error_template(error));
        // return self;
      }
    });
  }
});
