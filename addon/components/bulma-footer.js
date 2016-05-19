import Ember from 'ember';
import layout from '../templates/components/bulma-footer';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  tagName: 'footer',
  classNames: ['footer'],
  classNameBindings: _responsiveHelpers
});
