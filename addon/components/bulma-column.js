import Ember from 'ember';
import layout from '../templates/components/bulma-column';
import { _helpers, _responsiveHelpers, _gridBindings } from '../constants';

const {
  Component,
  set
} = Ember;

export default Component.extend({
  layout,
  classNames: ['column'],
  // REVIEW can this property and the concatBindings method be combined as an es5 get or computed?
  classNameBindings: [],

  /**
    Combine all of bulmas grid specific classes with responsive helper classes

    @method concatBindings
    @private
  */
  concatBindings() {
    set(this, 'classNameBindings', ['content'].concat(_gridBindings, _responsiveHelpers, _helpers));
  },

  init() {
    this._super(...arguments);
    this.concatBindings();
  }
});
