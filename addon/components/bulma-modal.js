import Ember from 'ember';
import layout from '../templates/components/bulma-modal';

/**
  * A classic modal overlay, in which you can include any content you want
  *
  * @class BulmaModal
  * @extends Ember Component
  */

export default Ember.Component.extend({
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
  onclose: null
});
