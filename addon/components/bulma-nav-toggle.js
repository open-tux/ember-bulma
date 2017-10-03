import Ember from 'ember';
import layout from '../templates/components/bulma-nav-toggle';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['nav-toggle'],
  classNameBindings: [].concat(_helpers, _responsiveHelpers),
  /**
    Handle click action on mousedown, return instance of component for mutablity

    @method mouseDown
    @returns Component
    @public
  */
  mouseDown() {
    let action = this.get('onmousedown');
    if (action) {
      action(this);
    }
  },
  actions: {
    click() {
      this.mouseDown();
    }
  }
});
