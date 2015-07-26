import DS from 'ember-data';


var Day = DS.Model.extend({
    rate: DS.attr('number'),
    country_code: DS.attr('string'),
    date: DS.attr('string')
});

Day.reopenClass({
    FIXTURES: [
        {id: 1, rate: 6.0023, country_code: "CNY", date: "07-25-15"},
        {id: 2, rate: 4.0023, country_code: "CNY", date: "07-25-10"},
        {id: 3, rate: 7.0023, country_code: "CNY", date: "07-25-05"},
        {id: 4, rate: 3.0023, country_code: "CNY", date: "07-25-00"},
        {id: 5, rate: 2.0023, country_code: "CNY", date: "07-25-95"},
        //alb
        {id: 6, rate: 50.000, country_code: "ALB", date: "07-25-15"},
        {id: 7, rate: 49.000, country_code: "ALB", date: "07-25-10"},
        {id: 8, rate: 43.000, country_code: "ALB", date: "07-25-05"},
        {id: 9, rate: 41.000, country_code: "ALB", date: "07-25-00"},
        {id: 10, rate: 50.000, country_code: "ALB", date: "07-25-95"},
        //way
        {id: 11, rate: 39.000, country_code: "WAY", date: "07-25-15"},
        {id: 12, rate: 40.000, country_code: "WAY", date: "07-25-10"},
        {id: 13, rate: 33.000, country_code: "WAY", date: "07-25-05"},
        {id: 14, rate: 34.000, country_code: "WAY", date: "07-25-00"},
        {id: 15, rate: 37.000, country_code: "WAY", date: "07-25-95"},
        //usa
        {id: 16, rate: 1.0000, country_code: "USA", date: "07-25-15"},
        {id: 17, rate: 2.0000, country_code: "USA", date: "07-25-10"},
        {id: 18, rate: 3.0000, country_code: "USA", date: "07-25-05"},
        {id: 19, rate: 1.0000, country_code: "USA", date: "07-25-00"},
        {id: 20, rate: 4.0000, country_code: "USA", date: "07-25-95"},
    ]
});

export default Day;