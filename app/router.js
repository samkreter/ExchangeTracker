import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('countries',{path: '/'}, function() {
    this.resource('country',{path: '/:country_id'});
  });
});

export default Router;
