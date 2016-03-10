import Ember from 'ember';
import layout from '../templates/components/bulma-hero-footer';

export default Ember.Component.extend({
  layout,
  classNames: ['hero-footer'],
  /**
    Signal if content should be nested in a container (div.container)

    @property useContainer
    @returns Boolean
    @default true
    @public
  */
  useContainer: true,

  /**
    Adds .is-fluid to nested container

    @property fluidContainer
    @returns Boolean
    @default false
    @public
  */
  fluidContainer: false
});
