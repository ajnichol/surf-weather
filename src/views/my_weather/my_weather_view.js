const MyWeather = Backbone.View.extend({
  el: '#my_weather',

  template: _.template(
    '<div class="container">' +
      '<table class="table table-hover">' +
        '<tr>' +
          '<th>City</th>' +
          '<th>Saved At</th>' +
          '<th>View Weather Forecast</th>' +
          '<th>Delete Weather</th>' +
        '</tr>' +
        '<% models.forEach(function(item) { %>' +
          '<tr>' +
            '<td><%= item.attributes.city %></td>' +
            '<td><%= item.attributes.created_at %></td>' +
            '<td><button type="button" data-city="<%= item.attributes.city %>" class="btn btn-primary" id="view_weather">View</button></td>' +
            '<td><button type="button" data-model-id="<%= item.id %>" class="btn btn-danger" id="delete_weather">Delete</button></td>' +
          '</tr>' +
        '<% }); %>' +
      '</table>' +
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
    'click #delete_weather': 'delete_weather',
    'click #view_weather': 'view_weather'
  },

  delete_weather: function(event) {
    collect_weather.url = 'php/weather/save_weather.php?user_id=' + localStorage.getItem('user_id') + '&weather_id=' + event.target.dataset.modelId;
    collect_weather.get(event.target.dataset.modelId).destroy({
      wait: true,
      success: function(model, response) {
        console.log('success model: ', model);
        console.log(response);
      },
      error: function(model, error) {
        console.log(error);
      }
    });
  },

  view_weather: function(event) {
    console.log('viewing weather');
    console.log(event.target.dataset.city);
  },

  render: function() {
    const self = this;
    collect_weather.fetch({
      success: function(collection, response) {
        self.$el.html(self.template(collection));
        return self;
      },
      error: function(collection, error) {
        self.$el.html(self.error_template(error));
        return self;
      }
    });
  }
});
