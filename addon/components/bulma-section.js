import Ember from 'ember';
import layout from '../templates/components/bulma-section';
import computed, { alias } from 'ember-computed-decorators';

export default Ember.Component.extend({
  layout,
  tagName: 'section',
  classNames: ['section'],
  /**
    Signal if content should be nested in a container (div.container)

    @property withContainer
    @returns Boolean
    @public
  */
  withContainer: true,

});
