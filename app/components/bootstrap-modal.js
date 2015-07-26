import Ember from 'ember';

export default Ember.Component.extend({
    EnableModal: false,
    toggle: function() {
        if(this.get('EnableModal')){
            this.$('.modal').modal('show');
        }
        else{
            this.$('.modal').modal('hide');
        }
    }.observes('EnableModal'),
    actions:{
        toggleModal: function(){
            this.toggleProperty('EnableModal');
        }
    }
});
