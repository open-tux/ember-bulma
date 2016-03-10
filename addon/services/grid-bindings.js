import Ember from 'ember';
import { camelCase } from '../utils';


export default Ember.Service.extend({
  /**
    All the bindings

    @property all
    @returns Array
    @public
  */
  all: null,
  /**
    Assemble class name bindings from all the possibilities

    @method _generateAllBindings
    @private
  */
  _generateAllBindings() {
    let possibilities = Ember.A([ 'half', 'third', 'quarter', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ]);
    let modifiers = Ember.A([ 'offset', 'desktop', 'mobile', 'tablet']);
    let bindings = Ember.A([]);

    possibilities.forEach((item) => {
      //Add all the possibilities
      bindings.pushObject(`is${camelCase(item)}:is-${item}`);

      //Add all the modifiers to all the possibilities
      modifiers.forEach(modifier => {
        bindings.pushObject(`is${camelCase(item)}${camelCase(modifier)}:is-${item}-${modifier}`);
      });
    });
    this.set('all', bindings);
  },

  init() {
    this._generateAllBindings();
  }
});
