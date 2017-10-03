import Ember from 'ember';
import layout from '../templates/components/bulma-button';
import { alias, bool } from 'ember-decorators/object/computed';
import { _colorBindings, _helpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'a',
  classNames: ['button'],
  classNameBindings: ['isLoading:is-loading', 'loading:is-loading', 'isOutlined:is-outlined', 'outlined:is-outlined', 'isFullwidth:is-fullwidth', 'isFullWidth:is-fullwidth', 'isInverted:is-inverted', 'inverted:is-inverted'].concat(_colorBindings, _helpers),
  attributeBindings: ['disabled'],

  /**
   Label for this button

   @property label
   @returns String
   @public
  */
  label: '',

  /**
    Signal that an icon has been provided

    @property _hasIcon
    @returns Boolean
    @private
  */
  @bool('icon') _hasIcon: false,

  /**
    Signal that an label has been provided

    @property _hasLabel
    @returns Boolean
    @private
  */
  @bool('label') _hasLabel: false,

  /**
    Binding for is-loading class

    @property isLoading
    @returns Boolean
    @public
  */
  isLoading: false,

  /**
    Handle click action on mousedown, return instance of component for mutablity

    @method handleMousedown
    @returns Component
    @public
  */
  mouseDown() {
    let action = this.get('onmousedown');
    if (action) {
      action(this);
    }
  },

  /**
    Common semantic alias for isLoading

    @property loading
    @returns Boolean
    @public
  */
  @alias('isLoading') loading: false
});
