import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    setFinalTrip: function(trip) {
      console.log(trip);
    }
  }
});
