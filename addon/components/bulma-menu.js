import Ember from 'ember';
import layout from '../templates/components/bulma-menu';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  tagName: 'aside',
  classNames: ['menu'],
  classNameBindings: _responsiveHelpers
});
