const SurfItem = Backbone.Model.extend({
  defaults: {
      spot_name: '',
      surf_item_forecast: {}
  }
});

const surf_item = new SurfItem();
