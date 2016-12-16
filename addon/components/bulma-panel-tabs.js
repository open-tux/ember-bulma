import Ember from 'ember';
import layout from '../templates/components/bulma-panel-tabs';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['panel-tabs'],
  classNameBindings: _responsiveHelpers
});
