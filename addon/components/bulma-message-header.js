import Ember from 'ember';
import layout from '../templates/components/bulma-message-header';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  classNameBindings: _responsiveHelpers
});
