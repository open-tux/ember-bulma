import Ember from 'ember';
import layout from '../templates/components/bulma-hero-footer';
import { _helpers, _responsiveHelpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['hero-foot'],
  classNameBindings: [].concat(_helpers, _responsiveHelpers),
  /**
    Signal if content should be nested in a container (div.container)

    @property useContainer
    @returns Boolean
    @default true
    @public
  */
  useContainer: true,

  /**
    Adds .is-fluid to nested container

    @property fluidContainer
    @returns Boolean
    @default false
    @public
  */
  fluidContainer: false
});
