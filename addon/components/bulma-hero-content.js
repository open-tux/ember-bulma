import Ember from 'ember';
import layout from '../templates/components/bulma-hero-content';

export default Ember.Component.extend({
  layout,
  classNames: ['hero-content'],
  classNameBindings: ['full:is-fullwidth'],
  fluidContainer: false
});
