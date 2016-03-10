import Ember from 'ember';
import layout from '../templates/components/bulma-menu';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['menu']
});
