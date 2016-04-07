import Ember from 'ember';

export default Ember.Component.extend({
  className: 'route-display',
  pricesAreHidden: true,
  previousClick: '#clear',
  tripIsSelected: false,

  didReceiveAttrs() {
    var _this = this;
    this.set('logo', 'http://alessiofanelli.com/wd/' + this.get('agency') + '.jpg');
    var minimum = null;

    let duration = this.get('duration'),
        hours = Math.floor(duration/ 60),
        minutes = duration % 60;
    this.set('formattedDuration', hours + 'h ' + minutes + 'm');

    let classes_json = this.get('classes');
    var seconda = classes_json[0]['fares'],
        prima = classes_json[1]['fares'],
        business = classes_json[2]['fares'],
        club = classes_json[3]['fares'],
        minimum = null;

    var classes = [seconda, prima, business, club],
        fares_ids = ['seconda', 'prima', 'business', 'club']


    for (let i = 0; i < 4; i++) {
        classes[i].forEach(function(entry) {
              if (entry['name'] == 'Low Cost') {
                entry['name'] = 'SuperEconomy';
              }

              let fare = fares_ids[i] + entry['name'];
              if (entry['price']){
                  let amount = parseInt(entry['price']['amount']);
                  if (amount < minimum || minimum == null) {
                      minimum = amount;
                      _this.set('previousClick', '#' + fare + _this.get('number'));
                  }
                  _this.set(fare, entry['price']['amount']);
              } else {
                  _this.set(fare, '-');
              }
        });
    }

    this.set('wholePrice', minimum);
  },
  didInsertElement() {
      let fare = this.get('previousClick')
      $(fare).addClass('selected-box');
  },

  actions: {
      showPrices() {
        this.toggleProperty('pricesAreHidden');
      },
      selectPrice(fare) {
        let previous = this.get('previousClick'),
            selector = '#' + fare,
            price = this.get(fare.slice(0, -4)); // Rimuovo il codice treno per trovare il costo

        $(selector).removeClass('pricing-box');
        $(selector).addClass('selected-box');
        this.set('wholePrice', price);

        if (previous != selector) {
          $(previous).removeClass('selected-box');
          $(previous).addClass('pricing-box');
        }

        this.set('previousClick', selector);
      },
      confirmTrip() {
        let data = {
          logo: this.get('logo'),
          from: this.get('from'),
          to: this.get('to'),
          departureTime: this.get('departureTime'),
          arrivalTime: this.get('arrivalTime'),
          duration: this.get('formattedDuration'),
          price: this.get('wholePrice'),
          agency: this.get('agency'),
          number: this.get('number')
        }

        this.toggleProperty('pricesAreHidden');
        this.toggleProperty('tripIsSelected');
        this.sendAction('pickedTrip', data);
      }
  }
});
