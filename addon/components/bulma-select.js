import Ember from 'ember';
import layout from '../templates/components/bulma-select';
import computed, { readOnly } from 'ember-computed-decorators';

export default Ember.Component.extend({
  layout,
  tagName: '',

  /**
    If used inline, consumer will provide an array of options to the select

    @property options
    @returns Array
    @public
  */
  options: Ember.A([]),
  actions: {
    /**
      Handle change event, return value as string, event object, and instance of component for mutablity

      @method handleMousedown
      @returns String, Object, Class
      @public
    */
    handleChange(e) {
      let dropdown = e.target;
      let val = dropdown.options[dropdown.selectedIndex].value;
      let onchange = this.get('onchange');

      if (onchange) {
        onchange(val, e, this);
      } else {
        return [val, e, this];
      }
    }
  }
});
