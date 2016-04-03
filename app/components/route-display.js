import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    var _this = this;
    var classes_json = this.get('classes');

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
      } else {
          _this.set(fare, '-');
      }
    });

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
