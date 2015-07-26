import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return this.store.find("country",+params.country_id);
    },
    afterModel: function(model) {
        var _this = this;
        return this.store.find('day', {country_code: model.get('country_code')}).then(function(data){
            var labels = [];
            var dataForChart = [];
            data.forEach(function(day){
                labels.push(day.get('date'));
                dataForChart.push(day.get('rate'));
            });
            console.log(labels);
            console.log(dataForChart);
            _this.set("labels",labels);
            _this.set("dataForChart",dataForChart);
        });
    },
    setupController: function(controller,model){
        controller.set('model', model);
        controller.set('labels',this.get('labels'));
        controller.set('dataForChart',this.get('dataForChart'));
    }
});
