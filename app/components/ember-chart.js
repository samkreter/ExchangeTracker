import EmberChart from 'ember-cli-chart/components/ember-chart';

export default EmberChart.extend({
    click: function(e){
        var activePoints = this.get('chart').getPointsAtEvent(e);
        activePoints.get(0);
    }
});