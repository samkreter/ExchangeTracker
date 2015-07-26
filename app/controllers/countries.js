import Ember from 'ember';

export default Ember.Controller.extend({
    filterText: '',
    filteredResults: function() {
        var filter = this.get('filterText');
        return this.get('model').filter(function(item) {
          return item.get('name').toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        });
    }.property('filterText')
});
