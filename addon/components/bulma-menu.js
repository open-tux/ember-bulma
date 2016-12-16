import Ember from 'ember';
import layout from '../templates/components/bulma-menu';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'aside',
  classNames: ['menu'],
  classNameBindings: _responsiveHelpers
});
