import Ember from 'ember';
import layout from '../templates/components/bulma-hero';
import { _helpers, _colorBindings, _responsiveHelpers } from '../constants';
import { alias } from 'ember-decorators/object/computed';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'section',
  classNames: ['hero'],
  classNameBindings: [
    'bold:is-bold',
    'isBold:is-bold',

    'medium:is-medium',
    'isMedium:is-medium',

    'large:is-large',
    'isLarge:is-large',

    'fullWidth:is-fullwidth',
    'isFullWidth:is-fullwidth',

    'fullHeight:is-fullheight',
    'isFullHeight:is-fullheight',

    'isLeft:is-left',
    'left:is-left',

    'isRight:is-right',
    'right:is-right'
  ].concat(_helpers, _colorBindings, _responsiveHelpers),

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
  @alias('useContainer') container: false
});
