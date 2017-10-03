import Ember from 'ember';
import layout from '../templates/components/bulma-panel-tabs';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['panel-tabs'],
  classNameBindings: [].concat(_helpers, _responsiveHelpers)
});
