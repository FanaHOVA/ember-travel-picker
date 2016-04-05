import Ember from 'ember';

export default Ember.Component.extend({
  className: 'route-display',
  pricesAreHidden: true,
  previousClick: '#clear',
  tripIsSelected: false,

  didReceiveAttrs() {
    var _this = this;
    var classes_json = this.get('classes');
    this.set('logo', 'http://alessiofanelli.com/wd/' + this.get('agency') + '.jpg');
    var minimum = null;

    let duration = this.get('duration'),
        hours = Math.floor(duration/ 60),
        minutes = duration % 60;
    this.set('formattedDuration', hours + 'h ' + minutes + 'm');

    var seconda = classes_json[0]['fares'],
        prima = classes_json[1]['fares'],
        business = classes_json[2]['fares'],
        club = classes_json[3]['fares'];

    seconda.forEach(function(entry) {
      if (entry['name'] == 'Low Cost') {
        entry['name'] = 'SuperEconomy'
      }

      let fare = 'seconda' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
          if (minimum == null) { minimum = entry['price']['amount']}
      } else {
          _this.set(fare, '-');
      }
    });

    this.set('wholePrice', minimum);

    prima.forEach(function(entry) {
      if (entry['name'] == 'Low Cost') {
        entry['name'] = 'SuperEconomy'
      }

      let fare = 'prima' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
      } else {
          _this.set(fare, '-');
      }
    });

    business.forEach(function(entry) {
      if (entry['name'] == 'Low Cost') {
        entry['name'] = 'SuperEconomy'
      }

      let fare = 'business' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
      } else {
          _this.set(fare, '-');
      }
    });

    club.forEach(function(entry) {
      if (entry['name'] == 'Low Cost') {
        entry['name'] = 'SuperEconomy'
      }

      let fare = 'club' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
      } else {
          _this.set(fare, '-');
      }
    });
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
          price: this.get('wholePrice')
        }
        this.toggleProperty('pricesAreHidden');
        this.toggleProperty('tripIsSelected');
        this.sendAction('pickedTrip', data);
      }
  }
});
