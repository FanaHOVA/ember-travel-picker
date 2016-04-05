import Ember from 'ember';

export default Ember.Component.extend({
  targetObject: Ember.computed.alias('parentView'),
  hasPrice: true,
  didReceiveAttrs() {
    let price = this.get('price');
    if (isNaN(parseFloat(price))) {
      this.toggleProperty('hasPrice');
    }
  },
  actions: {
    priceSelected(fare) {
      this.sendAction('priceSelected', fare);
    }
  }
});
