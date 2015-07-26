import Ember from 'ember';

export default Ember.Controller.extend({
    filterText: '',
    EnableModal: false,
    articalTitles: null,
    filteredResults: function() {
        var filter = this.get('filterText');
        return this.get('model').filter(function(item) {
          return item.get('name').toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        });
    }.property('filterText'),

    getNewsHeadlines: function(){
      this.send('toggleModal');
      return this.get("articalTitles");
    }.property('articalTitles'),

    actions: {
        toggleModal: function() {
          this.toggleProperty('EnableModal');
        },
        processChartClick: function(data) {
          var date = data.label;
          var country = data.datasetLabel.substr(0,data.datasetLabel.indexOf(' '));
          var self = this;
          Ember.$.getJSON( "http://content.guardianapis.com/search?to-date="+date+"&q="+country+"&api-key=zq8x8k7eazn5k6um9uc5jwkk", function(datas) {
            var titles = [];
            datas.response.results.forEach(function(result){
              titles.push(result.webTitle);
            });
            self.set("articalTitles",titles);
          });
        }
   }
});
