import Ember from 'ember';

export default Ember.Route.extend({
     model: function(params){
        return this.store.find("country",+params.country_id);
    }
});
