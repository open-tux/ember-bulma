import Ember from 'ember';

const {
  Controller,
  get,
  set,
  run: { later }
} = Ember;

export default Controller.extend({
  percentage: 1,
  actions: {
    start() {
      let percentage = get(this, 'percentage');
      later(() => {
        if (percentage <= 100) {
          set(this, 'percentage', percentage++);
        }
      }, 10);
    },

    reset() {
      set(this, 'percentage', 1);
    }
  }
});
