import Ember from 'ember';
import computed from 'ember-computed-decorators';

const { run } = Ember;
const { later } = run;

export default Ember.Controller.extend({
  @computed()
  demo() {
    return {
      sampleNotification: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.',
      open: {
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        f: true
      }
    }
  },
  actions: {
    closeAction(which) {
      this.set(`demo.open.${which}`, false);
      later(() => {
        this.set(`demo.open.${which}`, true);
      }, 1000);
    }
  }
});
