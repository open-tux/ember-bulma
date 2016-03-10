import Ember from 'ember';
import layout from '../templates/components/bulma-header';

export default Ember.Component.extend({
  layout,
  tagName: 'header',
  classNames: ['header']
});
