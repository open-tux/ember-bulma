import Ember from 'ember';
import layout from '../templates/components/bulma-column';
import computed from 'ember-computed-decorators';
import { _responsiveHelpers } from '../constants';

const {
  inject,
  get,
  set
} = Ember;

const { service } = inject;

export default Ember.Component.extend({
  layout,
  classNames: ['column'],
  gridBindings: service('grid-bindings'),
  classNameBindings: [],

  /**

  */
  concatBindings() {
    let gridBindings = get(this, 'gridBindings.all');
    set(this, 'classNameBindings', ['content'].concat(gridBindings, _responsiveHelpers));
  },
  init() {
    this._super(...arguments);
    this.concatBindings();
  }
});
