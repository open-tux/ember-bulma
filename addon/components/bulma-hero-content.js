import Ember from 'ember';
import layout from '../templates/components/bulma-hero-content';
import { alias } from 'ember-decorators/object/computed';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['hero-body'],
  classNameBindings: [
    'full:is-fullwidth'
  ].concat(_helpers, _responsiveHelpers),

  /**
    Signal if is-fluid should be added to the outer container

    @property fluidContainer
    @public
  */
  fluidContainer: false,

  /**
    Signal if container wrapper should be used

    @property useContainer
    @returns Bool
    @public
  */
  useContainer: true,

  /**
    Alias for useContainer

    @property container
    @returns Bool
    @public
  */
  @alias('useContainer') container: false
});
