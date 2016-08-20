import Ember from 'ember';
import layout from '../templates/components/bulma-textarea';
import computed, { read } from 'ember-computed-decorators';
import { nativeAttrs } from './../utils';

const {
  Component,
  get,
  set
} = Ember;

const {
  textarea
} = nativeAttrs;

export default Component.extend({
  layout,
  tagName: 'textarea',
  classNames: ['textarea'],
  attributeBindings: [].concat(textarea),
});
