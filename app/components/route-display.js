import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    var _this = this;
    var classes_json = this.get('classes');
    var agency = this.get('agency');

    if (agency == 'trenitalia') {
      var isItalo = false;

      var seconda = classes_json[0]['fares'],
          prima = classes_json[1]['fares'],
          business = classes_json[2]['fares'],
          club = classes_json[3]['fares'],
          smart = [],
          smartXL = [];
    } else {
      var isItalo = true;

      var smart = classes_json[0]['fares'],
          smartXL = classes_json[1]['fares'],
          business = classes_json[2]['fares'],
          club = classes_json[3]['fares'],
          seconda = [],
          prima = [];
    }

    seconda.forEach(function(entry) {
      let fare = 'seconda' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
      } else {
          _this.set(fare, '-');
      }
    });

    prima.forEach(function(entry) {
      let fare = 'prima' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
      } else {
          _this.set(fare, '-');
      }
    });

    business.forEach(function(entry) {
      let fare = 'business' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
      } else {
          _this.set(fare, '-');
      }
    });

    club.forEach(function(entry) {
      let fare = 'club' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
      } else {
          _this.set(fare, '-');
      }
    });

    smart.forEach(function(entry) {
      let fare = 'smart' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
      } else {
          _this.set(fare, '-');
      }
    });

    smartXL.forEach(function(entry) {
      let fare = 'smartXL' + entry['name'];
      if (entry['price']){
          _this.set(fare, entry['price']['amount']);
      } else {
          _this.set(fare, '-');
      }
    });
  }
});
