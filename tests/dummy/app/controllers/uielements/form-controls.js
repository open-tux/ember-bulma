import Ember from 'ember';
import computed, { lte } from 'ember-computed-decorators';

const {
  Controller,
  run: { later }
} = Ember;

export default Controller.extend({
  /**
    @property demo
    @private
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
    };
  },

  /**
    @property demoSelectedCurrency
    @private
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
    @property demoTextAreaCharsWarning
    @private
  */
  @lte('demo.textAreaCharsRemaining', 10) demoTextAreaCharsWarning,

  /**
    @property demoTextAreaCharsRemaining
    @private
  */
  @computed('demo.textAreaValue')
  demoTextAreaCharsRemaining(val) {
    let charsRemaining = val && val.length ? 140 - val.length : 140;
    return charsRemaining > 0 ? charsRemaining : 0;
  },
  actions: {
    /**
      @method format
      @private
    */
    format(n) {
      // format
    },

    /**
      @method changeAction
      @private
    */
    changeAction() {
      // simulate some change
    },

    /**
      @method transfer
      @private
    */
    transfer(amount, currency) {
      console.log('simulate transfer: ', `${currency}${amount}`);
    },

    /**
      @method updateCurrency
      @private
    */
    updateCurrency(val) {
      this.set('demo.currency', val);
    },

    /**
      @method submitAction
      @private
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
