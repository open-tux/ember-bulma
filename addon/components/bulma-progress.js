import Ember from 'ember';
import layout from '../templates/components/bulma-progress';
import { _colorBindings, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'progress',
  classNames: ['progress'],
  attributeBindings: ['value', 'max'],
  label: null,
  classNameBindings: [].concat(_colorBindings, _responsiveHelpers)
});
