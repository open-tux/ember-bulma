import Ember from 'ember';
import layout from '../templates/components/bulma-message';
import { alias } from 'ember-computed-decorators';
import { _colorBindings, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['message'],
  classNameBindings: [].concat(_colorBindings, _responsiveHelpers),

  /**
    A alternative semantic alias for body

    @property body
    @returns String
    @private
  */
  @alias('body') message: null
});
