import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  hasPrice: true,
  didReceiveAttrs() {
    let price = this.get('price');
    if (isNaN(parseFloat(price))) {
      this.toggleProperty('hasPrice');
    }
  },
  actions: {
      selectPrice() {
        this.toggleProperty('isSelected');
      }
  }
});
