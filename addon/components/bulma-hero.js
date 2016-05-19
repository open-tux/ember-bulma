import Ember from 'ember';
import layout from '../templates/components/bulma-hero';
import { _colorBindings, _responsiveHelpers } from '../constants';
import computed, { alias } from 'ember-computed-decorators';

export default Ember.Component.extend({
  layout,
  tagName: 'section',
  classNames: ['hero'],
  classNameBindings: [
    'bold:is-bold',
    'medium:is-medium',
    'large:is-large',
    'fullWidth:is-fullwidth',
    'fullHeight:is-fullheight',
    'isLeft:is-left',
    'left:is-left',
    'isRight:is-right',
    'right:is-right'
  ].concat(_colorBindings, _responsiveHelpers),

  /**
    Signal if container wrapper should be used

    @property useContainer
    @returns Bool
    @public
  */
  useContainer: false,

  /**
    Alias for useContainer

    @property container
    @returns Bool
    @public
  */
  @alias('useContainer') container
});
