import Ember from 'ember';
import layout from '../templates/components/bulma-input';
import computed, { readOnly, alias, bool, or } from 'ember-computed-decorators';
import { makeString } from '../utils';

const {
  Component,
  get,
  set
} = Ember;

export default Component.extend({
  layout,
  tagName: 'input',
  classNames: ['input'],
  classNameBindings: [
    'isLoading:is-loading',
    'isDisabled:is-disabled',
    'isSmall:is-small',
    'isMedium:is-medium',
    'isLarge:is-large'
  ],
  attributeBindings: [
    'type',
    'accept',
    'accesskey',
    'mozactionhint',
    'autocapitalize',
    'autocomplete',
    'autocorrect',
    'autofocus',
    'capture',
    'checked',
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'height',
    'incremental',
    'inputmode',
    'list',
    'max',
    'maxlength',
    'min',
    'minlength',
    'multiple',
    'name',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'results',
    'selectionDirection',
    'size',
    'spellcheck',
    'src',
    'step',
    'tabindex',
    'usemap',
    'value',
    'webkitdirectory',
    'width',
    'x-moz-errormessage',
    'oninput',
    'onchange'
  ]
});
