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
            '<td><button type="button" class="btn btn-primary">View</button></td>' +
            '<td><button type="button" class="btn btn-danger">Delete</button></td>' +
          '</tr>' +
        '<% }); %>' +
      '</table>' +
    '</div>'
// <tr>
//   <td>Alfreds Futterkiste</td>
//   <td>Maria Anders</td>
//   <td>Germany</td>
// </tr>
// <tr>
//   <td>Centro comercial Moctezuma</td>
//   <td>Francisco Chang</td>
//   <td>Mexico</td>
// </tr>
// <tr>
//   <td>Ernst Handel</td>
//   <td>Roland Mendel</td>
//   <td>Austria</td>
// </tr>
// <tr>
//   <td>Island Trading</td>
//   <td>Helen Bennett</td>
//   <td>UK</td>
// </tr>
// <tr>
//   <td>Laughing Bacchus Winecellars</td>
//   <td>Yoshi Tannamuri</td>
//   <td>Canada</td>
// </tr>
// <tr>
//   <td>Magazzini Alimentari Riuniti</td>
//   <td>Giovanni Rovelli</td>
//   <td>Italy</td>
// </tr>
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
