import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Controller,
  run: { later }
} = Ember;

export default Controller.extend({

  actions: {
    /**
      Simulate button action

      @method buttonAction
      @private
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
