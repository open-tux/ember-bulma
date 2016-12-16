import Ember from 'ember';
import layout from '../templates/components/bulma-hero-header';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'section',
  classNames: ['hero-head'],
  classNameBindings: _responsiveHelpers
});
