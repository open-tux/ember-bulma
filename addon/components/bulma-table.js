import Ember from 'ember';
import layout from '../templates/components/bulma-button';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'table',
  classNames: ['table'],
  classNameBindings: [
    'isBordered:is-bordered',
    'bordered:is-bordered',
    'isStriped:is-striped',
    'striped:is-striped',
    'isNarrow:is-narrow',
    'narrow:is-narrow'
  ].concat(_helpers, _responsiveHelpers)
});
