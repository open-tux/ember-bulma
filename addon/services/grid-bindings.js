import Ember from 'ember';
import { camelCase } from '../utils';

const {
  Service,
  A: emberArray
} = Ember;

export default Service.extend({
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
    let possibilities = emberArray(['three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']);
    let modifiers = emberArray(['offset', 'narrow', 'desktop', 'mobile', 'tablet']);
    let bindings = emberArray([]);

    possibilities.forEach((item) => {
      // Add all the possibilities
      bindings.pushObject(`is${camelCase(item)}:is-${item}`);

      // Add all the modifiers to all the possibilities
      modifiers.forEach((modifier) => {
        // offset & narrow should be prepended since 0.2.6
        // TODO: scale this better
        if (modifier === 'offset' || modifier === 'narrow') {
          bindings.pushObject(`is${camelCase(modifier)}${camelCase(item)}:is-${modifier}-${item}`);
        } else {
          // append modifier
          bindings.pushObject(`is${camelCase(item)}${camelCase(modifier)}:is-${item}-${modifier}`);
        }
      });
    });
    this.set('all', bindings);
  },

  init() {
    /*
      REVIEW Why do this assemblage as a process when values are always static?
      Instead just use static result as a constant, and keep this code if nomenclature changes, but never execute
    */
    // this._generateAllBindings();
  }
});
