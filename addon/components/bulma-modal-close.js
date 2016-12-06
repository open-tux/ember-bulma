import Ember from 'ember';
import layout from '../templates/components/bulma-modal-close';

const {
  get,
  set
} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'button',
  classNames: 'modal-close',

  /**

  */
  close() {
    let action = get(this, 'onclose');
    if (action) {
      action(this);
    }
  },

  /**

  */
  mouseDown() {
    this.close();
  },

  /**
    *
    */
  keyDown(e) {
    // on escape key
    if (e.which === 27) {
      this.close();
    }
  }
});
