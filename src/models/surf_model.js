const Surf = Backbone.Model.extend({
  idAttribute: 'id',

  defaults: {
      spot_name: '',
      spot_id: 0,
      error: ''
  }
});

const surf = new Surf();
