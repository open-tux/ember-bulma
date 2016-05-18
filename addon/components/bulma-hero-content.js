import Ember from 'ember';
import layout from '../templates/components/bulma-hero-content';
import computed, { alias } from 'ember-computed-decorators';

export default Ember.Component.extend({
  layout,
  classNames: ['hero-content'],
  classNameBindings: ['full:is-fullwidth'],
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
  @alias('useContainer') container
});
