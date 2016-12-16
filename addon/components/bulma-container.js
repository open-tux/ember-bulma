import Ember from 'ember';
import layout from '../templates/components/bulma-container';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['container'],
  classNameBindings: ['isFluid:is-fluid'].concat(_responsiveHelpers)
});
