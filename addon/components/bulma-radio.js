import Ember from 'ember';
import BulmaInput from '../components/bulma-input';
import layout from '../templates/components/bulma-checkbox';

const {
  set
} = Ember;

export default BulmaInput.extend({
  layout,

  type: 'radio',
  // Bindings are not comprehensive. More complex implementations should use a native element with classes applied
  classNameBindings: [
    'capture',
    'checked',
    'list'
  ],

  init() {
    this._super(...arguments);

    // classNames reset
    // Remove the inherited `input` class name (as it breaks the styling)
    set(this, 'classNames', ['radio']);
  }
});
