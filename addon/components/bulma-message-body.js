import Ember from 'ember';
import layout from '../templates/components/bulma-message-body';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNameBindings: _responsiveHelpers
});
