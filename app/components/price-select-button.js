import Ember from 'ember';

export default Ember.Component.extend({
  targetObject: Ember.computed.alias('parentView'),
  actions: {
    priceSelected(fare) {
      this.sendAction('priceSelected', fare);
    }
  }
});
