const NavLinkView = Backbone.View.extend({
  el: '.nav',

  template: _.template(
    '<% if (!isLoggedIn) {%>' +
      '<li><a href="/myprojects/surf-weather/src/#"><span class="glyphicon glyphicon-pencil"></span> Sign Up</a></li>' +
      '<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>' +
    '<% } else {%>' +
      '<li><a href="/myprojects/surf-weather/src/#"><span class="glyphicon glyphicon-cloud"></span> My Weather</a></li>' +
      '<li><a href="#"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>' +
    '<% } %>'
  ),

  render: function(){
    console.log('nav list view');
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  }
});
