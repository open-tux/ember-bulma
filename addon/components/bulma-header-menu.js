import Ember from 'ember';
import layout from '../templates/components/bulma-header-menu';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component,
  A
} = Ember;

export default Component.extend({
  layout,
  classNames: ['header-menu'],
  classNameBindings: [
    'isLeft:header-left',
    'isRight:header-right',
    'left:header-left',
    'right:header-right'
  ].concat(_helpers, _responsiveHelpers),
  /**
    Array of links for this menu

    @property links
    @returns Array
    @public
  */
  links: A([])
});
