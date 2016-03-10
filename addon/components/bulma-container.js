import Ember from 'ember';
import layout from '../templates/components/bulma-container';

export default Ember.Component.extend({
  layout,
  classNames: ['container'],
  classNameBindings: ['isFluid:is-fluid']
});
