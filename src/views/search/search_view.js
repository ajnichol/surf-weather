const Search = Backbone.View.extend({
  el: '#search_form',

  template: _.template(
    '<div class="form-group">' +
      '<div class="col-sm-2">' +
      '</div>' +
      '<div class="col-sm-10">' +
        '<h3>Search</h3>' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<div class="col-sm-2"></div>' +
      '<div class="col-sm-8">' +
        '<input type="text" class="form-control" name="search" id="search">' +
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

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  search: function(event) {
    event.preventDefault();
    console.log('searching');
  }
});
