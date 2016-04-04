import Ember from 'ember';

export default Ember.Component.extend({
  className: 'route-display',

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
  }
});
