import Ember from 'ember';
import layout from '../templates/components/bulma-textarea';
import computed, { read } from 'ember-computed-decorators';

const {
  Component,
  get,
  set
} = Ember;

export default Component.extend({
  layout,
  tagName: 'textarea',
  classNames: ['textarea'],
  attributeBindings: [
    'autocapitalize',
    'autocomplete',
    'autofocus',
    'cols',
    'disabled',
    'form',
    'maxlength',
    'minlength',
    'name',
    'placeholder',
    'readonly',
    'required',
    'rows',
    'selectionDirection',
    'selectionEnd',
    'selectionStart',
    'spellcheck',
    'wrap',
    'oninput'
  ],

  oninput(e) {
    return get(e, 'target.value');
  }
});
