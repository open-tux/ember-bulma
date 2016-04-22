 import Ember from 'ember';
import layout from '../templates/components/bulma-input';
import computed, { readOnly, alias, bool } from 'ember-computed-decorators';
import { makeString } from '../utils';

export default Ember.Component.extend({
  layout,
  tagName: '',

  /**
    Input type (text, radio, checkbox, password)

    @property text
    @returns String
    @public
  */
  type: 'text',

  /**
    Signal if input should be wrapped in a control container as per bulma docs (<p class='control'>input</p> )

    @property control
    @returns Boolean
    @public
  */
  control: false,

  /**
    Remove any bulma prefixes for actual input type

    @property _inputType
    @returns String
    @public
  */
  @computed('type')
  _inputType(type) {
    return (/menu/).test(type) ? type.replace('menu-', '') : type;
  },

  /**
    Determine if control container is required as per bulma docs, then set control flag accordingly

    @method _requiresControl
    @returns Boolean
    @private
  */
  @computed('isLoading', 'hasIcon')
  _requiresControl(isLoading, hasIcon) {
    if (isLoading || hasIcon) {
      this.set('control', true);
    }
  },

  /**
    Signal that an icon has been passed

    @property _hasIcon
    @returns Boolean
    @private
  */
  @bool('icon') _hasIcon,

  /**
    Signal that input should be a textarea

    @property isTextArea
    @returns Boolean
    @public
  */
  isTextArea: false,

  /**
    Common mis-spelling alias for isTextArea

    @property isTextarea
    @returns Boolean
    @public
  */
  @alias('isTextArea') isTextarea,

  /**
    Determine if a label must be used for this input type

    @property _useLabel
    @returns Boolean
    @private
  */
  @computed('label')
  _useLabel(label) {
    let type = this.get('type');
    return label && label.length > 0 || type === 'radio' || type === 'checkbox';
  },

  /**
    Signal when input field is not a text field

    @property _isNotTextInput
    @returns Boolean
    @private
  */
  @computed('type')
  _isNotTextInput(type) {
    return type === 'select' || type === 'radio' || type === 'checkbox';
  },

  /**
    Compute the bulma class required for this input type

    @property _classFromType
    @return String
    @private
  */
  @computed('type')
  _classFromType(type) {
    return this.get('_isNotTextInput') ? `${type}` : 'input';
  },

  /**
    Bind size only to input field

    @property _size
    @returns Bool
    @private
  */
  @computed('isSmall', 'isMedium', 'isLarge')
  _size(small, medium, large) {
    let isSmall = small ? 'is-small' : small;
    let isMedium = medium ? 'is-medium' : medium;
    let isLarge = large ? 'is-large' : large;

    return isSmall || isMedium || isLarge;
  },


  /**
    A string representation of the classNames array so that it can be propagated

    @property _classes
    @returns String
    @private
  */
  @readOnly
  @computed('classNames.[]', 'size')
  _classes(classNames) {
    let size = this.get('_size');
    return `${makeString(classNames)} ${this.get('_classFromType')} ${size}`;
  },

  actions: {
    /**
      Handle change action on key-up (key-up event is built into the ember input helper)

      @method handleChange
      @public
    */
    handleChange(action) {
      this.sendAction('key-up');
    }
  }
});
