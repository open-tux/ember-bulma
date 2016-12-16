import Ember from 'ember';
import layout from '../templates/components/bulma-modal-close';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: 'modal-close',

  /**
    Perform closure action provided to close modal

    @method close
    @private
  */
  close() {
    let action = get(this, 'onclose');
    if (action) {
      action(this);
    }
  },

  /**
    Optional support for mouseDown in addition to click

    @method mouseDown
    @public
  */
  mouseDown() {
    this.close();
  },

  /**
    Support for click

    @method click
    @public
  */
  click() {
    this.close();
  },

  /**
    Support for closing modal using the escape key

    @method keyDown
    @private
    */
  keyDown(e) {
    // on escape key
    if (e.which === 27) {
      this.close();
    }
  }
});
