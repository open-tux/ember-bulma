import Ember from 'ember';
import layout from '../templates/components/bulma-panel-block';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  classNames: ['panel-block'],
  classNameBindings: _responsiveHelpers
});
