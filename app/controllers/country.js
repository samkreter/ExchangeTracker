import Ember from 'ember';

export default Ember.Controller.extend({


    chartData: function(){
        var labels = this.get('labels');
        var datas = this.get('dataForChart');
        var test = {
            labels: labels,
            datasets: [
                {
                    label: this.get("model").get("name"),
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: datas
                }
            ]
        };
        return test;
    }.property('model')
});
