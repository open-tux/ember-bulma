import Ember from 'ember';
import layout from '../templates/components/bulma-hero-header';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'section',
  classNames: ['hero-head'],
  classNameBindings: [].concat(_helpers, _responsiveHelpers)
});
