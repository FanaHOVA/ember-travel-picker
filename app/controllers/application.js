import Ember from 'ember';

export default Ember.Controller.extend({
  checkoutActive: false,
  actions: {
    setFinalTrip: function(trip) {
      this.set('checkoutActive', true);

      this.set('from', trip['from']);
      this.set('to', trip['to']);
      this.set('price', trip['price']);
      this.set('departureTime', trip['departureTime']);
      this.set('arrivalTime', trip['arrivalTime']);
      this.set('logo', trip['logo']);
      this.set('duration', trip['duration']);
    }
  }
});
