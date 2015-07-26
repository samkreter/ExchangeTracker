import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
 namespace: 'api'
});

//used for querying the fixture data
   // queryFixtures: function(records, query) {
   //      return records.filter(function(record) {
   //          for(var key in query) {
   //              if (!query.hasOwnProperty(key)) { continue; }
   //              var value = query[key];
   //              if (record[key] !== value) { return false; }
   //          }
   //          return true;
   //      });
   //  }