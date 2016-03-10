import Ember from 'ember';
import computed from 'ember-computed-decorators';

const { run } = Ember;
const { later } = run;

export default Ember.Controller.extend({

  actions: {
    /**

    */
    buttonAction(button) {
      button.set('isLoading', true);

      later(() => {
        button.setProperties({
          'isLoading': false,
          'isOutlined': true
        });
      }, 500);
    }
  }
});
