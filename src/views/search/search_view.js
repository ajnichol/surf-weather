const Search = Backbone.View.extend({
  el: '#search_form',

  template: _.template(
    '<div class="form-group">' +
      '<div class="col-sm-2">' +
      '</div>' +
      '<div class="col-sm-10">' +
        '<h3>Search</h3>' +
        '<% if (error != "") {%>' +
          '<p class="error"><%=error%></p>' +
        '<% } %>' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<div class="col-sm-2"></div>' +
      '<div class="col-sm-8">' +
        '<input type="text" class="form-control" name="user_search" id="user_search">' +
      '</div>' +
      '<div class="col-sm-2"></div>' +
    '</div>' +
    '<div class="form-group">' +
      '<div class="col-sm-offset-2 col-sm-10">' +
        '<button type="submit" class="btn btn-default">The World <span class="glyphicon glyphicon-send" aria-hidden="true"></span></button>' +
      '</div>' +
    '</div>'
  ),

  events: {
    'submit': 'search'
  },

  initialize: function() {
    this.listenTo(weather, 'change:error', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  search: function(event) {
    event.preventDefault();
    let user_search = $('#user_search').val().trim();
    weather.save({city: user_search}, {
      wait: true,
      success: function(model, response) {
        model.set('error', '');
        console.log(response);
      },
      error: function(model, error) {
        model.set('error', error.responseText);
      }
    });
  }
});
