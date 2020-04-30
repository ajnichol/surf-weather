const NavigationView = Backbone.View.extend({
    el: '#app_nav',

    template: _.template(
      '<nav class="navbar navbar-inverse">' +
        '<div class="container-fluid">' +
          '<div class="container">' +
            '<div class="navbar-header">' +
              '<a class="navbar-brand" href="#">Surf-Weather</a>' +
            '</div>' +
            '<ul class="nav navbar-nav navbar-right">' +
            '</ul>' +
          '</div>' +
        '</div>' +
      '</nav>'
    ),

    initialize: function(){
      this.render();
    },

    render: function(){
      this.$el.html(this.template());
      const navListView = new NavLinkView({
        model: user
      });
      return this;
    }
});

const navigationView = new NavigationView();
