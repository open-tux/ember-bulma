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
  // Bindings are not comprehensive. More complex implementations should use a native element with classes applied
  attributeBindings: [
    'isDisabled: disabled',
    'autofocus',
    'cols',
    'disabled',
    'form',
    'name',
    'placeholder',
    'readonly',
    'required',
    'rows',
    'wrap',
    'onkeydown',
    'onkeyup',
    'onkeypress',
    'oninput'
  ]
});
