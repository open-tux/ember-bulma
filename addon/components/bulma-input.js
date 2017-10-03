import Ember from 'ember';
import layout from '../templates/components/bulma-input';
import { deprecations } from '../utils';
import { _helpers } from '../constants';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  layout,
  tagName: 'input',
  classNames: ['input'],
  classNameBindings: [
    'isSmall:is-small',
    'isMedium:is-medium',
    'isLarge:is-large'
  ].concat(_helpers),
  // Bindings are not comprehensive. More complex implementations should use a native element with classes applied
  attributeBindings: [
    'type',
    'value',
    'name',
    'accept',
    'isDisabled:disabled',
    'disabled',
    'autocomplete',
    'autofocus',
    'dirname',
    'list',
    'readonly',
    'size',
    'required',
    'multiple',
    'maxlength',
    'pattern',
    'min',
    'step',
    'placeholder',
    'onkeydown',
    'onkeyup',
    'onkeypress',
    'oninput',
    'onchange',
    'onblur',
    'onfocus'
  ],

  /**
    * Default class name binding
    *
    * @property isNormal
    * @public
    * @type Bool
    * @default true
    */
  isNormal: true,

  init() {
    this._super(...arguments);

    // Make user aware of deprecations for this Component
    deprecations([
      { name: 'control', value: get(this, 'control') },
      { name: 'isLoading', value: get(this, 'isLoading') },
      { name: 'isTextarea', value: get(this, 'isTextarea') },
      { name: 'key-up', value: get(this, 'key-up') }
    ]);
  }
});
