import Ember from 'ember';
import layout from '../templates/components/bulma-nav-right';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['nav-right'],
  classNameBindings: ['isMenu:nav-menu'].concat(_helpers, _responsiveHelpers)
});
