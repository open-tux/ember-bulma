import Ember from 'ember';
import layout from '../templates/components/bulma-nav';
import { _responsiveHelpers } from '../constants';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['nav'],
  classNameBindings: ['hasShadow:has-shadow'].concat(_responsiveHelpers)
});
