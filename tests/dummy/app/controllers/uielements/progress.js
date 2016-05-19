import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  run,
  get,
  set
} = Ember;
const { later } = run;

export default Ember.Controller.extend({
  percentage: 1,
  actions: {
    start() {
      let percentage = get(this, 'percentage');
      setInterval(() => {
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
