import DS from 'ember-data';

var Route = DS.Model.extend({
    agency: DS.attr('string'),
    category: DS.attr('string'),
    number: DS.attr('string'),
    from: DS.attr('string'),
    to: DS.attr('string'),
    departureTime: DS.attr('date'),
    arrivalTime: DS.attr('date'),
    duration: DS.attr('number'),
    classes: DS.attr()
});

Route.reopenClass({
  FIXTURES: [
              {
                "id": 1,
                "agency": "trenitalia",
                "category": "frecciarossa",
                "number": "9504",
                "from": "Roma Termini",
                "to": "Milano Centrale",
                "departureTime": "2016-02-23T06:29:00Z",
                "arrivalTime": "2016-02-23T09:42:00Z",
                "duration": "193",
                "classes": [
                  {
                    "name": "Seconda",
                    "fares": [
                      {
                        "name": "SuperEconomy",
                        "available": false
                      },
                      {
                        "name": "Standard",
                        "available": false
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "69",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Prima",
                    "fares": [
                      {
                        "name": "SuperEconomy",
                        "price": {
                          "amount": "59",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "69",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "79",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Business",
                    "fares": [
                      {
                        "name": "SuperEconomy",
                        "price": {
                          "amount": "89",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "99",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "109",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Club",
                    "fares": [
                      {
                        "name": "SuperEconomy",
                        "price": {
                          "amount": "99",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "129",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "199",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": 2,
                "agency": "trenitalia",
                "category": "frecciarossa 1000",
                "number": "9544",
                "from": "Roma Termini",
                "to": "Milano Centrale",
                "departureTime": "2016-02-23T07:29:00Z",
                "arrivalTime": "2016-02-23T10:42:00Z",
                "duration": "193",
                "classes": [
                  {
                    "name": "Seconda",
                    "fares": [
                      {
                        "name": "SuperEconomy",
                        "price": {
                          "amount": "49",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "59",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "69",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Prima",
                    "fares": [
                      {
                        "name": "SuperEconomy",
                        "price": {
                          "amount": "49",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "69",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "79",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Business",
                    "fares": [
                      {
                        "name": "SuperEconomy",
                        "price": {
                          "amount": "89",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "99",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "109",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Club",
                    "fares": [
                      {
                        "name": "SuperEconomy",
                        "price": {
                          "amount": "99",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "129",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "199",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "id": 3,
                "agency": "italotreno",
                "category": "italotreno",
                "number": "2002",
                "from": "Roma Termini",
                "to": "Milano Centrale",
                "departureTime": "2016-02-23T07:39:00Z",
                "arrivalTime": "2016-02-23T10:55:00Z",
                "duration": "196",
                "classes": [
                  {
                    "name": "Smart",
                    "fares": [
                      {
                        "name": "Low Cost",
                        "price": {
                          "amount": "49",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "59",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "69",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Smart XL",
                    "fares": [
                      {
                        "name": "Low Cost",
                        "price": {
                          "amount": "49",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "69",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "79",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Prima",
                    "fares": [
                      {
                        "name": "Low Cost",
                        "price": {
                          "amount": "89",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "99",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "109",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Executive",
                    "fares": [
                      {
                        "name": "Low Cost",
                        "price": {
                          "amount": "99",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Standard",
                        "price": {
                          "amount": "129",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      },
                      {
                        "name": "Flex",
                        "price": {
                          "amount": "199",
                          "currency": "EUR",
                          "symbol": "€"
                        }
                      }
                    ]
                  }
                ]
              }
            ]});

export default Route;
