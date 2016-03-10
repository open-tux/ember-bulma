import Ember from 'ember';
import layout from '../templates/components/bulma-column';

const { inject } = Ember;
const { service } = inject;

export default Ember.Component.extend({
  layout,
  classNames: ['column'],
  gridBindings: service('grid-bindings'),
  classNameBindings: ['content'],
  didInitAttrs() {
    let classNameBindings = this.get('classNameBindings');
    this.set('classNameBindings', classNameBindings.concat(this.get('gridBindings.all')));
  }
});
