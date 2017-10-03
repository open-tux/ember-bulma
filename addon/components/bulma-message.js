import Ember from 'ember';
import layout from '../templates/components/bulma-message';
import { alias } from 'ember-decorators/object/computed';
import { _helpers, _colorBindings, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

// TODO: Convert to use higher-order component API
export default Component.extend({
  layout,
  classNames: ['message'],
  classNameBindings: [].concat(_helpers, _colorBindings, _responsiveHelpers),

  /**
    A alternative semantic alias for body

    @property body
    @returns String
    @private
  */
  @alias('body') message: null
});
