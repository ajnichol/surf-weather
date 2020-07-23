const Surf = Backbone.Model.extend({
  idAttribute: 'id',

  defaults: {
      spot_name: '',
      spot_id: 0,
      surf_forecast: [],
      error: ''
  }
});

const surf = new Surf();

surf.url = 'php/surf/search_surf.php?user_id=' + localStorage.getItem('user_id');
