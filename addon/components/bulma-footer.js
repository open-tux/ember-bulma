import Ember from 'ember';
import layout from '../templates/components/bulma-footer';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'footer',
  classNames: ['footer'],
  classNameBindings: _responsiveHelpers
});
