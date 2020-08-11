const MySurf = Backbone.View.extend({
  el: '#my_surf',

  template: _.template(
    '<div id="delmar" data-spot-id="<%= models[0].attributes.spot_id %>" data-spot-name="<%= models[0].attributes.spot_name %>">' +
      '<h1 class="surf_spots"><%= models[0].attributes.spot_name %></h1>' +
      '<p class="spot_desc">Click to view forecast</p>' +
    '</div>' +
    '<div id="tourmaline" data-spot-id="<%= models[1].attributes.spot_id %>" data-spot-name="<%= models[1].attributes.spot_name %>">' +
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

  search_surf: function(event) {
    surf.save({spot_name: event.target.dataset.spotName, spot_id: event.target.dataset.spotId}, {
      wait: true,
      success: function(model, response) {
        window.location.href = "http://localhost:8888/myprojects/surf-weather/src/#/surf_results";
      },
      error: function(model, error) {
        self.$el.html(self.error_template(error));
      }
    });
  },

  render: function() {
    const self = this;
    collect_surf.fetch({
      success: function(collection, response) {
        self.$el.html(self.template(collection));
      },
      error: function(collection, error) {
        self.$el.html(self.error_template(error));
      }
    });
  }
});
