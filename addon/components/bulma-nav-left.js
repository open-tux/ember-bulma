import Ember from 'ember';
import layout from '../templates/components/bulma-nav-left';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['nav-left'],
  classNameBindings: _responsiveHelpers
});
