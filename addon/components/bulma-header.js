import Ember from 'ember';
import layout from '../templates/components/bulma-header';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  tagName: 'header',
  classNames: ['header'],
  classNameBindings: _responsiveHelpers
});
