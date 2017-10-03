import Ember from 'ember';
import layout from '../templates/components/bulma-header';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'header',
  classNames: ['header'],
  classNameBindings: [].concat(_helpers, _responsiveHelpers)
});
