import Ember from 'ember';
import layout from '../templates/components/bulma-panel';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['panel'],
  classNameBindings: [].concat(_helpers, _responsiveHelpers)
});
