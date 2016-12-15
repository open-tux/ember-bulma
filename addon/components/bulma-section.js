import Ember from 'ember';
import layout from '../templates/components/bulma-section';
import { _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'section',
  classNames: ['section'],
  classNameBindings: _responsiveHelpers,
  /**
    Signal if content should be nested in a container (div.container)
    // TODO depecrate this

    @property withContainer
    @returns Boolean
    @public
  */
  withContainer: true
});
