import DS from 'ember-data';


var Country = DS.Model.extend({
    name: DS.attr(),
    rate: DS.attr(),
    country_code: DS.attr(),
    date: DS.attr()
});

Country.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "China",
            rate: 6.0023,
            country_code: "CNY",
            date: "07-25-15"
        },
        {
            id: 2,
            name: "Albanay",
            rate: 50.000,
            country_code: "ALB",
            date: "07-25-15"
        },
        {
            id: 3,
            name: "Wayne Enterprises",
            rate: 39.000,
            country_code: "WAY",
            date: "07-25-15"
        },
        {
            id: 4,
            name: "United States",
            rate: 1.000,
            country_code: "USA",
            date: "07-25-15"
        }
    ]
});

export default Country;