import Ember from 'ember';
import layout from '../templates/components/bulma-nav';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['nav'],
  classNameBindings: ['hasShadow:has-shadow'].concat(_responsiveHelpers)
});
