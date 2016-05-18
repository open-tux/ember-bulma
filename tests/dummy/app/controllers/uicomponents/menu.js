import Ember from 'ember';
import computed, { or } from 'ember-computed-decorators';
import { fromPOJA } from './../../utils';

const { set } = Ember;

export default Ember.Controller.extend({
  /**
    Simulate model

    @property demo
    @returns Object
    @public
  */
  @computed()
  demo() {
    return {

    }
  },

  actions: {
    noAction() {
      //
    }

  }
});
