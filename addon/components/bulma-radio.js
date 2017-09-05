import Ember from 'ember';
import BulmaInput from '../components/bulma-input';
import layout from '../templates/components/bulma-radio';

const {
  get,
  set
} = Ember;

export default BulmaInput.extend({
  layout,

  classNames: ['radio'],
  type: 'radio',

  // Bindings are not comprehensive. More complex implementations should use a native element with classes applied
  classNameBindings: [
    'checked'
  ],

  init() {
    this._super(...arguments);

    let defaultAttrBindings = get(this, 'attributeBindings').slice();

    defaultAttrBindings.push('checked');

    set(this, 'attributeBindings', defaultAttrBindings);

    // classNames reset
    // Remove the inherited `input` class name (as it breaks the styling)
    set(this, 'classNames', get(this, 'classNames').filter((name) => name !== 'input'));
  }
});
