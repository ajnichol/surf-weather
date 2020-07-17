const CollectSurf = Backbone.Collection.extend({
  model: Surf,

  url: 'php/surf/search_surf.php'
});

const collect_surf = new CollectSurf();
