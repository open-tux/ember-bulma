import Ember from 'ember';
import layout from '../templates/components/bulma-notification';
import computed, { readOnly } from 'ember-computed-decorators';
import { _colorBindings, _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  classNames: ['notification'],
  classNameBindings: [].concat(_colorBindings, _responsiveHelpers),

  /**
    If a close action has been provided, close button should display by default

    @method _displayClose
    @returns Boolean
    @private
  */
  @computed('close')
  _displayClose() {
    return !!this.get('close');
  },
  actions: {

    /**
      Handle close, return instance of component for mutablity

      @method close
      @returns Component
      @public
    */
    close() {
      this.sendAction('close', this);
    }
  }
});
