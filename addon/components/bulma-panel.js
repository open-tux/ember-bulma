import Ember from 'ember';
import layout from '../templates/components/bulma-panel';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['panel'],
  classNameBindings: _responsiveHelpers
});
