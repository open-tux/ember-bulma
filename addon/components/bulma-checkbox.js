import Ember from 'ember';
import BulmaInput from '../components/bulma-input';
import layout from '../templates/components/bulma-checkbox';

const {
  get,
  set
} = Ember;

export default BulmaInput.extend({
  layout,
  classNames: ['checkbox'],
  type: 'checkbox',

  init() {
    this._super(...arguments);

    // Remove the inherited input class name (as it breaks the styling)
    get(this, 'classNames').removeObject('input');
  }
});
