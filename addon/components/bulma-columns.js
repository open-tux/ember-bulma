import Ember from 'ember';
import layout from '../templates/components/bulma-columns';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['columns'],
  classNameBindings: [
    'desktop:is-desktop',
    'isDesktop:is-desktop',
    'mobile:is-mobile',
    'isMobile:is-mobile',
    'isMultiline:is-multiline',
    'isGapless:is-gapless',
    'isVcentered:is-vcentered'
  ].concat(_helpers, _responsiveHelpers)
});
