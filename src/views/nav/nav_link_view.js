const NavLinkView = Backbone.View.extend({
  el: '.nav',

  template: _.template(
    '<% if (!isLoggedIn) { %>' +
      '<li><a href="#/sign_up"><span class="glyphicon glyphicon-pencil"></span> Sign Up</a></li>' +
      '<li><a href="#/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>' +
    '<% } else { %>' +
      '<li><a>Greetings, <%= name %></a></li>' +
      '<li><a href="#/search"><span class="glyphicon glyphicon-search"></span> Search</a></li>' +
      '<li><a href="#/my_weather"><span class="glyphicon glyphicon-cloud"></span> My Weather</a></li>' +
      '<li><a href="#/my_surf"><span class="glyphicon glyphicon-tint"></span> My Surf</a></li>' +
      '<li><a href="php/logout/logout.php" onclick="localStorage.clear();"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>' +
    '<% } %>'
  ),

  initialize: function() {
    this.render();
    this.listenTo(user, 'change:isLoggedIn', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
