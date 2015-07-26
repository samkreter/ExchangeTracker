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
                    fillColor: "rgba(248, 108, 85, 0.5)",
                    strokeColor: "rgb(248,108,85)",
                    pointColor: "#F3490E",
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
