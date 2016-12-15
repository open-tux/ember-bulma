import Ember from 'ember';
import layout from '../templates/components/bulma-modal-background';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  classNames: ['modal-background']
});
