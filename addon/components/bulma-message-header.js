import Ember from 'ember';
import layout from '../templates/components/bulma-message-header';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNameBindings: [].concat(_helpers, _responsiveHelpers)
});
