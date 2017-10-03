import Ember from 'ember';
import layout from '../templates/components/bulma-menu';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'aside',
  classNames: ['menu'],
  classNameBindings: [].concat(_helpers, _responsiveHelpers)
});
