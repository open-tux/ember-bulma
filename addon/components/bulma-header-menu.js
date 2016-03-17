import Ember from 'ember';
import layout from '../templates/components/bulma-header-menu';

export default Ember.Component.extend({
  layout,
  classNames: ['header-menu'],
  classNameBindings: ['isLeft:header-left', 'isRight:header-right', 'left:header-left', 'right:header-right'],
  /**
    Array of links for this menu

    @property links
    @returns Array
    @public
  */
  links: Ember.A([])
});
