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
      '<label for="login_email" class="col-sm-2 control-label">Search</label>' +
      '<div class="col-sm-10">' +
        '<input type="text" class="form-control" name="search" id="search">' +
      '</div>' +
    '</div>' +
    '<div class="form-group">' +
      '<div class="col-sm-offset-2 col-sm-10">' +
        '<button type="submit" class="btn btn-default">Submit</button>' +
      '</div>' +
    '</div>'
  ),

  events: {
    'submit': 'search'
  },

  // initialize: function() {
  //   this.listenTo(user, 'change:error', this.render);
  // },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  search: function(event) {
    event.preventDefault();
    console.log('searching');
  }
});
