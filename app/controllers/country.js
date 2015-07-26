import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['Countries'],
    CountriesModel: Ember.computed.alias('controllers.Countries.model'),

    countryDates: function(){
        var labels = [];
        this.get('countryDays').then((function(data){
            data.forEach(function(day){
                labels.push(day.get('date'));
            });
        }));
        return labels;
    }.property('model'),

    countryDays: function(){
        return this.store.find('day', {country_code: this.get('model').get('country_code')});
    }.property('model'),

    countryData: function(){
        var dataForChart = [];
        this.get('countryDays').then((function(data){
            data.forEach(function(day){
                dataForChart.push(day.get('rate'));
            });
        }));
        return dataForChart;
    }.property('model'),

    chartData: function(){
        var test = {
            labels: this.get("countryDates"),
            datasets: [
                {
                    label: this.get("model").get("name"),
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.get('countryData')
                }
            ]
        };
        debugger;
        return test;
    }.property('model')
});
