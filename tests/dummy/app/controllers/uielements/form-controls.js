import Ember from 'ember';
import computed, { lte } from 'ember-computed-decorators';

const { run } = Ember;
const { later } = run;

export default Ember.Controller.extend({
  /**

  */
  @computed()
  demo() {
    return {
      languages: Ember.A(['English', 'Español']),
      currencies: Ember.A(['$', '£', '€']),
      greeting: 'Hello',
      currency: '$',
      textAreaValue: null,
      inputValue: null
    }
  },

  /**

  */
  @computed('demo.currency')
  demoSelectedCurrency(currency) {
    let currencyMap = {
      '$': 'Dollar',
      '£': 'Pound',
      '€': 'Euro'
    };
    return currencyMap[currency];
  },

  /**

  */
  @lte('demo.textAreaCharsRemaining', 10) demoTextAreaCharsWarning,

  /**

  */
  @computed('demo.textAreaValue')
  demoTextAreaCharsRemaining(val) {
    let charsRemaining = val && val.length ? 140 - val.length : 140;
    return charsRemaining > 0 ? charsRemaining : 0;
  },
  actions: {
    /**

    */
    format(n){
      //format
    },

    /**

    */
    changeAction() {
      //simulate some change
    },

    /**

    */
    transfer(amount, currency) {
      console.log('simulate transfer: ', `${currency}${amount}`);
    },

    /**

    */
    updateCurrency(val) {
      this.set('demo.currency', val);
    },

    /**

    */
    submitAction(button) {
      this.set('submitButton', button);

      button.set('isLoading', true);
      later(() => {
        button.setProperties({
          'isLoading': false,
          'icon':  'fa fa-check',
          'label': 'Sent',
          'primary': false,
          'success': true
        });
      }, 800);
    }
  }
});
