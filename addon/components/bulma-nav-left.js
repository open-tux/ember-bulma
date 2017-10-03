import Ember from 'ember';
import layout from '../templates/components/bulma-nav-left';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['nav-left'],
  classNameBindings: [].concat(_helpers, _responsiveHelpers)
});
