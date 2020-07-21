const CollectSurf = Backbone.Collection.extend({
  model: Surf,

  url: 'php/surf/search_surf.php?user_id=' + localStorage.getItem('user_id')
});

const collect_surf = new CollectSurf();
