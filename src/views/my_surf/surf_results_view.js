const SurfResults = Backbone.View.extend({
  el: '#surf_results',

  template: _.template(
    '<div class="jumbotron text-center">' +
      '<h1 class="display-4"><%= spot_name %></h1>' +
      '<h2>Surf Forecast</h2>' +
    '</div>' +
    '<div class="container">' +
      '<div class="row">' +
      '<% surf_forecast.forEach(function(item, index) { %>' +
        '<div class="col-xs-3">' +
          '<div class="panel panel-primary">' +
            '<div class="panel-heading">' +
              '<img src="http://cdnimages.magicseaweed.com/30x30/<%= item.condition.weather %>.png">' +
              '<h3 class="panel-title"> Air Temp: <%= item.condition.temperature %></h3>' +
            '</div>' +
            '<div class="panel-body">' +
              '<p>timestamp: <%= item.localTimestamp %></p>' +
              '<p>swell: <%= item.swell.minBreakingHeight %> - <%= item.swell.maxBreakingHeight %>ft</p>' +
              '<p>wind: <%= item.wind.speed %>MPH, direction: <%= item.wind.compassDirection %></p>' +
              '<a href="#/surf_item_forecast" id="surf_item" data-surf-item="<%= index %>">click for full forecast details</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '<% }); %>' +
      '</div>' +
    '</div>'
  ),

  events: {
    'click #surf_item': 'surf_item'
  },

  surf_item: function(event) {
    let surfItem = event.target.dataset.surfItem;
    let surfItemForcast = surf.get('surf_forecast')[surfItem];
    surf_item.set('surf_item_forecast', surfItemForcast);
    window.location.href = "http://localhost:8888/myprojects/surf-weather/src/#/surf_item_forecast";
    //think about whether to render view from instantiation or from the router e.g. #/surf_item_forecast
    //and if instantiation how would you show the new view as its own page?
    // let surf_item_view = new SurfItemForecast({
    //   model: surf_item
    // });
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
