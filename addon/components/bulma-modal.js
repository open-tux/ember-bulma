import Ember from 'ember';
import layout from '../templates/components/bulma-modal';

const {
  Component,
  run: { schedule },
  get,
  set
} = Ember;

const jQuery = Ember.$;

/**
  * A classic modal overlay, in which you can include any content you want
  *
  * @class BulmaModal
  * @extends Ember Component
  */

export default Component.extend({
  layout,
  classNames: ['modal'],
  classNameBindings: ['show:is-active'],
  /**
    * Include background container
    *
    * @property withBackground
    * @type Boolean
    * @default true
    * @public
    */
  withBackground: true,

  /**
    * Wraps content with .modal-container which also centers content
    *
    * @property isCentered
    * @type Boolean
    * @default true
    * @public
    */
  isCentered: true,

  /**
    * Include close button
    *
    * @property withClose
    * @type Boolean
    * @default true
    * @public
    */
  withClose: true,

  /**
    * Function to apply when closing modal
    *
    * @property onclose
    * @type Function
    * @default null
    * @public
    */
  onclose: null,

  /**
    * Execute on close when escape is pressed
    *
    * @method escapeHandler
    * @private
  */
  escapeHandler(e) {
    if (get(this, 'onclose') && get(e, 'keyCode') === 27) {
      get(this, 'onclose')();
    }
  },

  /**
    *
    * @method attachKeyUpHandlers
    * @private
    */
  attachKeyUpHandlers() {
    schedule('afterRender', () => {
      jQuery(document).on('keyup.ember-bulma-modal',
      Ember.run.bind(this, this.escapeHandler));
    });
  },

  /**
    *
    * @method detatchKeyUpHandlers
    * @private
    */
  detatchKeyUpHandlers() {
    jQuery(document).off('keyup.ember-bulma-modal');
  },

  init() {
    this._super(...arguments);
    this.attachKeyUpHandlers();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.detatchKeyUpHandlers();
  }
});
