import Ember from 'ember';
import layout from '../templates/components/bulma-panel';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['panel']
});
