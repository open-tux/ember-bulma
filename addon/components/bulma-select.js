import Ember from 'ember';
import layout from '../templates/components/bulma-select';
import computed, { readOnly } from 'ember-computed-decorators';
import { deprecations } from '../utils';

const {
  get
} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',
  classNames: ['bulma-select'],
  /**
    If used inline, consumer will provide an array of options to the select

    @property options
    @returns Array
    @public
  */
  options: Ember.A([]),

  /**
    * If used inline, pass through classNames
    *
    * @property _classes
    * @private
    * @type String
    * @param classNames {Array}
    */
  @computed('classNames')
  _classes(classNames) {
    return classNames.toString().replace(/,/g, ' ');
  },
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
  },

  init() {
    this._super(...arguments);

    // Make user aware of deprecations for this Component
    deprecations([
      { name: 'control', value: get(this, 'control') },
    ]);
  }
});
