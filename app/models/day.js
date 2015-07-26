import DS from 'ember-data';


var Day = DS.Model.extend({
    rate: DS.attr(),
    country_code: DS.attr(),
    date: DS.attr()
});

Day.reopenClass({
    FIXTURES: [
        {id: 1, rate: 6.0023, country_code: "CNY", date: "07-25-15"},
        {id: 2, rate: 6.0023, country_code: "CNY", date: "07-25-15"},
        {id: 3, rate: 6.0023, country_code: "CNY", date: "07-25-15"},
        {id: 4, rate: 6.0023, country_code: "CNY", date: "07-25-15"},
        {id: 5, rate: 6.0023, country_code: "CNY", date: "07-25-15"},
        //alb
        {id: 6, rate: 50.000, country_code: "ALB", date: "07-25-15"},
        {id: 7, rate: 50.000, country_code: "ALB", date: "07-25-15"},
        {id: 8, rate: 50.000, country_code: "ALB", date: "07-25-15"},
        {id: 9, rate: 50.000, country_code: "ALB", date: "07-25-15"},
        {id: 10, rate: 50.000, country_code: "ALB", date: "07-25-15"},
        //way
        {id: 11, rate: 39.000, country_code: "WAY", date: "07-25-15"},
        {id: 12, rate: 39.000, country_code: "WAY", date: "07-25-15"},
        {id: 13, rate: 39.000, country_code: "WAY", date: "07-25-15"},
        {id: 14, rate: 39.000, country_code: "WAY", date: "07-25-15"},
        {id: 15, rate: 39.000, country_code: "WAY", date: "07-25-15"},
        //usa
        {id: 16, rate: 1.0000, country_code: "USA", date: "07-25-15"},
        {id: 17, rate: 1.0000, country_code: "USA", date: "07-25-15"},
        {id: 18, rate: 1.0000, country_code: "USA", date: "07-25-15"},
        {id: 19, rate: 1.0000, country_code: "USA", date: "07-25-15"},
        {id: 20, rate: 1.0000, country_code: "USA", date: "07-25-15"},
    ]
});

export default Day;